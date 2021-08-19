import React from 'react';
import { CSVLink } from 'react-csv';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { trackPromise } from 'react-promise-tracker';
import { MissionControlServiceClient } from '@walmart/mission-control-service-library';
import Table from '../table/table';
import PrimaryButton from '../../atoms/button.component';

class BulkUploadHistoryModal extends React.PureComponent {
  constructor(props) {
    super(props);
    const options = { environment: props.env };
    this.MissionControlService = new MissionControlServiceClient(options);
    this.linkClick = this.linkClick.bind(this);
    this.state = {
      serviceNameActionMap: { eventItemCreateForsee: 'FORSEE Item Upload' },
      rows: [],
      downloadableData: '',
      fileName: '',
      tableOptions: {
        headerFields: [
          { key: 0, mappedTitle: 'createdTime', label: 'Created Time', isEditable: false },
          { key: 1, mappedTitle: 'fileName', label: 'File Name', isEditable: false },
          { key: 2, mappedTitle: 'fileType', label: 'File Type', isEditable: false },
          { key: 3, mappedTitle: 'userId', label: 'User Id', isEditable: false },
          {
            key: 4,
            mappedTitle: 'status',
            label: 'Status',
            isEditable: false,
          },
          {
            key: 5,
            mappedTitle: 'action',
            label: 'Action',
            isEditable: false,
            type: 'link',
            linkClick: this.linkClick,
          },
        ],
        keys: [
          { key: 0, value: 'createdTime' },
          { key: 1, value: 'fileName' },
          { key: 2, value: 'serviceNameActionTitle' },
          { key: 3, value: 'userId' },
          { key: 4, value: 'status' },
          { key: 5, value: 'action' },
        ],
      },
    };
  }

  componentDidUpdate(prevProps) {
    const { details, openModal } = this.props;
    if (prevProps.openModal !== openModal && openModal === true) {
      const { serviceNameActionMap } = this.state;
      const params = {
        serviceName: details.serviceName,
        serviceNameAction: details.serviceNameAction,
        crudOperation: 'Read',
        miscPageFeature: 'Get Upload History',
        miscPageName: details.miscPageName,
      };
      trackPromise(
        this.MissionControlService.getBulkUploadHistory(params).then((res) => {
          for (let index = 0; index < res.data.length; index += 1) {
            res.data[index].key = index;
            res.data[index].createdTime = new Date(res.data[index].createdTime).toLocaleString();
            res.data[index].serviceNameActionTitle =
              serviceNameActionMap[res.data[index].serviceNameAction];
            if (res.data[index].status === 'PROCESSED_WITH_ERROR') {
              res.data[index].action = 'Download Error File';
            }
          }
          this.setState({ rows: res.data });
        })
      );
    }
  }

  linkClick(id) {
    const { rows } = this.state;
    const { details } = this.props;
    const params = {
      fileId: rows[id].fileId,
      serviceNameAction: rows[id].serviceNameAction,
      miscPageName: details.miscPageName,
      miscPageFeature: 'Download Error File',
      crudOperation: 'Read',
    };
    trackPromise(
      this.MissionControlService.downloadErrorFile(params).then((res) => {
        if (res.data.data !== null) {
          this.setState({ downloadableData: res.data, fileName: rows[id].fileName });
        } else {
          this.setState({ downloadableData: '' });
        }
        this.csvLink.link.click();
      })
    );
  }

  render() {
    const { openModal, closeModal } = this.props;
    const { rows, tableOptions, downloadableData, fileName } = this.state;
    return (
      <div>
        <CSVLink
          data={downloadableData}
          filename={fileName}
          ref={(r) => {
            this.csvLink = r;
          }}
          target="_blank"
        />
        <Dialog open={openModal} maxWidth="lg" fullWidth aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Upload History</DialogTitle>
          <DialogContent>
            <Table tableOptions={tableOptions} rows={rows} />
          </DialogContent>
          <DialogActions>
            <PrimaryButton buttonLabel="Close" onClick={closeModal} />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default BulkUploadHistoryModal;

BulkUploadHistoryModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  env: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
};
