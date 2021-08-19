import React from 'react';
import Switch from '@material-ui/core/Switch';
import GetAppIcon from '@material-ui/icons/GetApp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PublishIcon from '@material-ui/icons/Publish';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SyncIcon from '@material-ui/icons/Sync';
import MapIcon from '@material-ui/icons/Map';
import './tableStyle.css';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';

class ChangeButton extends React.PureComponent {
  render() {
    const {
      id,
      actionItemsEditable,
      actionItemsNonEditable,
      isRowEditable,
      tableOptions,
      isToggleEnabled,
      isRowToggleEnabled,
      isDownloadEnabled,
      isRowDownloadEnabled,
      isEditEnabled,
      isRowEditEnabled,
      isDeleteEnabled,
      isRowDeleteEnabled,
      isUploadEnabled,
      isRowUploadEnabled,
      isOpenInNewEnabled,
      isRowOpenInNewEnabled,
      isLinkEnabled,
      isRowLinkEnabled,
      isBulkPublishEnabled,
      isRowBulkPublishEnabled,
      isBulkUpdateEnabled,
      isRowBulkUpdateEnabled,
      isPublishMappingEnabled,
      isRowPublishMappingEnabled,
      defaultToggle,
      row,
      toggleTooltip,
      downloadTooltip,
      editTooltip,
      deleteTooltip,
      uploadTooltip,
      newTabTooltip,
      linkTooltip,
      bulkPublishTooltip,
      bulkUpdateTooltip,
      publishMappingTooltip,
    } = this.props;
    if (isRowEditable === false) {
      return (
        <div>
          {isToggleEnabled && isRowToggleEnabled && (
            <div style={{ float: 'left' }}>
              <Tooltip title={toggleTooltip}>
                <Switch
                  checked={defaultToggle}
                  onClick={() => {
                    tableOptions.actionTaken(id, 'toggleBtn', row);
                  }}
                  onKeyDown={() => {
                    tableOptions.actionTaken(id, 'toggleBtn', row);
                  }}
                  color="primary"
                />
              </Tooltip>
            </div>
          )}
          {isDownloadEnabled && isRowDownloadEnabled && (
            <div className="editButton">
              <Tooltip title={downloadTooltip}>
                <GetAppIcon
                  color="primary"
                  onClick={() => {
                    tableOptions.actionTaken(id, 'downloadBtn', row);
                  }}
                  onKeyDown={() => {
                    tableOptions.actionTaken(id, 'downloadBtn', row);
                  }}
                />
              </Tooltip>
            </div>
          )}
          {isEditEnabled && isRowEditEnabled && (
            <div className="editButton">
              <Tooltip title={editTooltip}>
                <EditIcon
                  color="primary"
                  onClick={() => {
                    tableOptions.actionTaken(id, 'editBtn', row);
                  }}
                  onKeyDown={() => {
                    tableOptions.actionTaken(id, 'editBtn', row);
                  }}
                />
              </Tooltip>
            </div>
          )}
          {isDeleteEnabled && isRowDeleteEnabled && (
            <div className="editButton">
              <Tooltip title={deleteTooltip}>
                <DeleteIcon
                  color="primary"
                  onClick={() => {
                    tableOptions.actionTaken(id, 'deleteBtn', row);
                  }}
                  onKeyDown={() => {
                    tableOptions.actionTaken(id, 'deleteBtn', row);
                  }}
                />
              </Tooltip>
            </div>
          )}
          {isUploadEnabled && isRowUploadEnabled && (
            <div className="editButton">
              <Tooltip title={uploadTooltip}>
                <PublishIcon
                  color="primary"
                  onClick={() => {
                    tableOptions.actionTaken(id, 'uploadBtn', row);
                  }}
                  onKeyDown={() => {
                    tableOptions.actionTaken(id, 'uploadBtn', row);
                  }}
                />
              </Tooltip>
            </div>
          )}
          {isOpenInNewEnabled && isRowOpenInNewEnabled && (
            <div className="editButton">
              <Tooltip title={newTabTooltip}>
                <OpenInNewIcon
                  color="primary"
                  onClick={() => {
                    tableOptions.actionTaken(id, 'openInNewBtn', row);
                  }}
                  onKeyDown={() => {
                    tableOptions.actionTaken(id, 'openInNewBtn', row);
                  }}
                />
              </Tooltip>
            </div>
          )}
          {isLinkEnabled && isRowLinkEnabled && (
            <div className="editButton">
              <Tooltip title={linkTooltip}>
                <AttachmentIcon
                  color="primary"
                  onClick={() => {
                    tableOptions.actionTaken(id, 'linkBtn', row);
                  }}
                  onKeyDown={() => {
                    tableOptions.actionTaken(id, 'linkBtn', row);
                  }}
                />
              </Tooltip>
            </div>
          )}
          {isBulkPublishEnabled && isRowBulkPublishEnabled && (
            <div className="editButton">
              <Tooltip title={bulkPublishTooltip}>
                <CloudUploadIcon
                  color="primary"
                  onClick={() => {
                    tableOptions.actionTaken(id, 'bulkPublishBtn', row);
                  }}
                  onKeyDown={() => {
                    tableOptions.actionTaken(id, 'bulkPublishBtn', row);
                  }}
                />
              </Tooltip>
            </div>
          )}
          {isBulkUpdateEnabled && isRowBulkUpdateEnabled && (
            <div className="editButton">
              <Tooltip title={bulkUpdateTooltip}>
                <SyncIcon
                  color="primary"
                  onClick={() => {
                    tableOptions.actionTaken(id, 'bulkUpdateBtn', row);
                  }}
                  onKeyDown={() => {
                    tableOptions.actionTaken(id, 'bulkUpdateBtn', row);
                  }}
                />
              </Tooltip>
            </div>
          )}
          {isPublishMappingEnabled && isRowPublishMappingEnabled && (
            <div className="editButton">
              <Tooltip title={publishMappingTooltip}>
                <MapIcon
                  color="primary"
                  onClick={() => {
                    tableOptions.actionTaken(id, 'publishMappingBtn', row);
                  }}
                  onKeyDown={() => {
                    tableOptions.actionTaken(id, 'publishMappingBtn', row);
                  }}
                />
              </Tooltip>
            </div>
          )}
          {actionItemsEditable.map((action, index) => {
            return (
              <div
                tabIndex={index}
                key={action.key}
                role="button"
                className="editButton"
                onClick={() => {
                  tableOptions.actionTaken(id, action.actionKey);
                }}
                onKeyDown={() => {
                  tableOptions.actionTaken(id, action.actionKey);
                }}
              >
                {action.actionLabel}
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div>
        {actionItemsNonEditable.map((action, index) => {
          return (
            <div
              tabIndex={index}
              key={action.key}
              role="button"
              className="editButton"
              onClick={() => {
                tableOptions.actionTaken(id, action.actionKey);
              }}
              onKeyDown={() => {
                tableOptions.actionTaken(id, action.actionKey);
              }}
            >
              {action.actionLabel}
            </div>
          );
        })}
      </div>
    );
  }
}

ChangeButton.propTypes = {
  id: PropTypes.number.isRequired,
  actionItemsEditable: PropTypes.arrayOf(PropTypes.object),
  actionItemsNonEditable: PropTypes.arrayOf(PropTypes.object),
  isRowEditable: PropTypes.bool,
  tableOptions: PropTypes.any.isRequired,
  isToggleEnabled: PropTypes.bool,
  isRowToggleEnabled: PropTypes.bool,
  isDownloadEnabled: PropTypes.bool,
  isRowDownloadEnabled: PropTypes.bool,
  isEditEnabled: PropTypes.bool,
  isRowEditEnabled: PropTypes.bool,
  isDeleteEnabled: PropTypes.bool,
  isRowDeleteEnabled: PropTypes.bool,
  isUploadEnabled: PropTypes.bool,
  isRowUploadEnabled: PropTypes.bool,
  defaultToggle: PropTypes.bool,
  isOpenInNewEnabled: PropTypes.bool,
  isRowOpenInNewEnabled: PropTypes.bool,
  isLinkEnabled: PropTypes.bool,
  isRowLinkEnabled: PropTypes.bool,
  isBulkPublishEnabled: PropTypes.bool,
  isRowBulkPublishEnabled: PropTypes.bool,
  isBulkUpdateEnabled: PropTypes.bool,
  isRowBulkUpdateEnabled: PropTypes.bool,
  isPublishMappingEnabled: PropTypes.bool,
  isRowPublishMappingEnabled: PropTypes.bool,
  row: PropTypes.object,
  toggleTooltip: PropTypes.string,
  downloadTooltip: PropTypes.string,
  editTooltip: PropTypes.string,
  deleteTooltip: PropTypes.string,
  uploadTooltip: PropTypes.string,
  newTabTooltip: PropTypes.string,
  linkTooltip: PropTypes.string,
  bulkPublishTooltip: PropTypes.string,
  bulkUpdateTooltip: PropTypes.string,
  publishMappingTooltip: PropTypes.string,
};

ChangeButton.defaultProps = {
  actionItemsEditable: [],
  actionItemsNonEditable: [],
  defaultToggle: false,
  isToggleEnabled: false,
  isRowToggleEnabled: true,
  isDownloadEnabled: false,
  isRowDownloadEnabled: true,
  isEditEnabled: false,
  isRowEditEnabled: true,
  isRowEditable: false,
  isRowDeleteEnabled: true,
  isDeleteEnabled: false,
  isUploadEnabled: false,
  isRowUploadEnabled: true,
  isOpenInNewEnabled: false,
  isRowOpenInNewEnabled: true,
  isLinkEnabled: false,
  isRowLinkEnabled: true,
  isBulkPublishEnabled: false,
  isRowBulkPublishEnabled: true,
  isBulkUpdateEnabled: false,
  isRowBulkUpdateEnabled: true,
  isPublishMappingEnabled: false,
  isRowPublishMappingEnabled: true,
  row: {},
  toggleTooltip: 'Toggle',
  downloadTooltip: 'Download',
  editTooltip: 'Edit',
  deleteTooltip: 'Delete',
  uploadTooltip: 'Bulk Upload',
  newTabTooltip: 'Open in new tab',
  linkTooltip: 'Link',
  bulkPublishTooltip: 'Bulk Publish',
  bulkUpdateTooltip: 'Update',
  publishMappingTooltip: 'Publish Mapping',
};
export default ChangeButton;
