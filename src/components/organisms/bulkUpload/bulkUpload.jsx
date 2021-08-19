import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';
import { trackPromise } from 'react-promise-tracker';
import { MissionControlServiceClient } from '@walmart/mission-control-service-library';
import PrimaryButton from '../../atoms/button.component';
import Dropdown from '../../atoms/dropdown.component';
import BulkUploadHistoryModal from './bulkUploadHistoryModal';
import BulkUploadConfirmationModal from './bulkUploadConformationModal';
import Toast from '../../atoms/toast.component';

class BulkUpload extends React.PureComponent {
  constructor(props) {
    super(props);
    this.env = props.env;
    const options = { environment: this.env, timeout: 180000 };
    this.MissionControlService = new MissionControlServiceClient(options);
    this.closeModal = this.closeModal.bind(this);
    this.closeConfirmationModal = this.closeConfirmationModal.bind(this);
    this.viewHistory = this.viewHistory.bind(this);
    this.downloadSampleFile = this.downloadSampleFile.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.fileTypeChange = this.fileTypeChange.bind(this);
    this.dropdownTypeChange = this.dropdownTypeChange.bind(this);

    this.state = {
      openModal: false,
      openConfirmationModal: false,
      details: {},
      formData: {},
      fileTypeOptions: [],
      fileTypeValue: '',
      downloadableOptions: [],
      downloadTypeValue: '',
      downloadedFileName: '',
      showAlert: false,
      severity: 'error',
      alertMessage: '',
    };
  }

  componentDidMount() {
    this.updateLocation();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      this.updateLocation();
    }
  }

  updateLocation() {
    const { location, downloadableData, downloadableOptions, downloadFileName } = this.props;
    this.setState({ details: location }, () => {
      if (location && location.fileTypeOptions) {
        this.setState({ fileTypeOptions: location.fileTypeOptions });
      } else {
        this.setState({ fileTypeValue: location.fileType });
      }
      if (downloadableOptions && downloadableOptions.length > 0) {
        this.setState({ downloadableOptions });
      } else {
        this.setState({
          downloadTypeValue: downloadableData,
          downloadedFileName: downloadFileName,
        });
      }
    });
  }

  fileTypeChange(value) {
    if (value === null) {
      this.setState({ fileTypeValue: '' });
    } else {
      this.setState({ fileTypeValue: value.value });
    }
  }

  dropdownTypeChange(value) {
    if (value === null) {
      this.setState({ downloadTypeValue: '' });
    } else {
      this.setState(
        {
          downloadTypeValue: value.value,
          downloadedFileName: value.downloadFileName,
        },
        () => {
          setTimeout(() => this.csvLink.link.click());
        }
      );
    }
  }

  downloadSampleFile() {
    this.csvLink.link.click();
  }

  closeModal() {
    this.setState({ openModal: false });
  }

  closeConfirmationModal(action) {
    this.setState({ openConfirmationModal: false });
    if (action === 'ok') {
      const { formData } = this.state;
      trackPromise(
        this.MissionControlService.bulkUpload(formData)
          .then((res) => {
            if (res.status === 200 && res.data && res.data.status === 'OK') {
              this.setState({ showAlert: false }, () => {
                this.setState({
                  showAlert: true,
                  severity: 'success',
                  alertMessage: 'File uploaded successfully.',
                });
              });
            } else {
              this.setState({ showAlert: false }, () => {
                this.setState({
                  showAlert: true,
                  severity: 'error',
                  alertMessage: 'Failed to upload file. Please try after some time.',
                });
              });
            }
          })
          .catch(() => {
            this.setState({ showAlert: false }, () => {
              this.setState({
                showAlert: true,
                severity: 'error',
                alertMessage: 'Failed to upload file. Please try after some time.',
              });
            });
          })
      );
    }
  }

  viewHistory() {
    this.setState({ openModal: true });
  }

  fileUpload(e) {
    const { details, fileTypeValue } = this.state;
    if (fileTypeValue !== undefined && fileTypeValue !== '') {
      e.preventDefault();
      const formData = new FormData();
      const userAuditInfoMap = {
        miscPageName: details.miscPageName,
        miscPageFeature: details.miscPageFeature,
        crudOperation: details.crudOperation,
      };
      formData.append(
        'userAuditInfoMap',
        new Blob([JSON.stringify(userAuditInfoMap)], { type: 'application/json' })
      );
      formData.append('file', e.target.files[0]);
      formData.append(
        'fileDetails',
        new Blob(
          [
            JSON.stringify({
              fileType: fileTypeValue,
              data: details.data,
            }),
          ],
          {
            type: 'application/json',
          }
        )
      );
      this.setState({ openConfirmationModal: true, formData });
    } else {
      this.setState({ showAlert: false }, () => {
        this.setState({
          showAlert: true,
          severity: 'error',
          alertMessage: 'Please select a file type.',
        });
      });
    }
  }

  render() {
    const {
      openModal,
      details,
      openConfirmationModal,
      fileTypeOptions,
      fileTypeValue,
      showAlert,
      severity,
      alertMessage,
      downloadTypeValue,
      downloadableOptions,
      downloadedFileName,
    } = this.state;
    return (
      <div className="root">
        <main className="content">
          <div>
            <Toast alertMessage={alertMessage} severity={severity} showAlert={showAlert} />
            <CSVLink
              separator="|"
              data={downloadTypeValue}
              filename={downloadedFileName}
              ref={(r) => {
                this.csvLink = r;
              }}
              target="_blank"
            />
            <BulkUploadConfirmationModal
              openConfirmationModal={openConfirmationModal}
              closeConfirmationModal={this.closeConfirmationModal}
            />
            <div>
              <Box display="flex">
                <Box p={1} flexGrow={1}>
                  {fileTypeOptions && fileTypeOptions.length > 0 && (
                    <Dropdown
                      label="File Type"
                      options={fileTypeOptions}
                      onChange={this.fileTypeChange}
                      value={fileTypeValue}
                      style={{ maxWidth: '250px', backgroundColor: '#ffffff' }}
                    />
                  )}
                </Box>

                <Box p={1}>
                  {downloadableOptions.length === 0 && (
                    <PrimaryButton
                      buttonLabel="Download sample file"
                      onClick={this.downloadSampleFile}
                    />
                  )}
                  {downloadableOptions && downloadableOptions.length > 0 && (
                    <Dropdown
                      label="Download sample file"
                      options={downloadableOptions}
                      onChange={this.dropdownTypeChange}
                      value={downloadTypeValue}
                      style={{ minWidth: '250px', backgroundColor: '#ffffff' }}
                    />
                  )}
                </Box>
                <Box p={1}>
                  <PrimaryButton
                    buttonLabel="View history"
                    variant="outlined"
                    onClick={this.viewHistory}
                    style={{ backgroundColor: '#ffffff' }}
                  />
                  <BulkUploadHistoryModal
                    env={this.env}
                    openModal={openModal}
                    closeModal={this.closeModal}
                    details={details}
                  />
                </Box>
              </Box>
            </div>
            <div>
              <div
                style={{
                  paddingTop: '10px',
                  color: '#555',
                  width: '100%',
                  textAlign: 'center',
                  zIndex: 1,
                  position: 'absolute',
                  marginTop: '300px',
                }}
              >
                Drag and drop a CSV file
              </div>
              <input
                style={{
                  marginTop: '10px',
                  marginBottom: '20px',
                  height: '600px',
                  border: '1px dashed #1565c0',
                  borderRadius: '15px',
                  backgroundColor: '#fff',
                  width: '100%',
                  outline: 'none',
                }}
                type="file"
                id="csvFile"
                name="file"
                onClick={(e) => {
                  e.target.value = null;
                }}
                onChange={(e) => this.fileUpload(e)}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default BulkUpload;

BulkUpload.propTypes = {
  location: PropTypes.object.isRequired,
  env: PropTypes.string.isRequired,
  downloadableData: PropTypes.string,
  downloadableOptions: PropTypes.array,
  downloadFileName: PropTypes.string,
};

BulkUpload.defaultProps = {
  downloadableData: '',
  downloadableOptions: [],
  downloadFileName: '',
};
