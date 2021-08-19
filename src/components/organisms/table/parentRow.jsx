import React from 'react';
import PropTypes from 'prop-types';
import ChangeButton from './changeButton';
import TableData from './tableData';
import './tableStyle.css';

class ParentRow extends React.PureComponent {
  render() {
    const {
      tableOptions,
      row,
      index,
      isActionsEnabled,
      tableScrollAndPinning,
      pinRightColumns,
      pinLeftColumns,
      visibilityArray,
      headerFields,
      isThisChild,
    } = this.props;

    return (
      <>
        {tableOptions.keys.map((cell, innerIndex) => {
          return (
            <TableData
              key={cell.key}
              data={row[cell.value]}
              cellStyle={row[`${cell.value}_cell_style`]}
              isRowEditable={row.isRowEditable}
              id={index}
              visibility={visibilityArray[innerIndex]}
              columnNumber={tableOptions.isExpandCollapseEnabled ? innerIndex + 1 : innerIndex}
              pinLeftColumns={pinLeftColumns}
              pinRightColumns={pinRightColumns}
              tableScrollAndPinning={tableScrollAndPinning}
              header={headerFields[innerIndex]}
              headerFields={headerFields}
              tableOptions={tableOptions}
              isThisChild={isThisChild}
            />
          );
        })}
        {isActionsEnabled === true && (
          <td
            className="tableCell paddingLeft0px paddingRight0px"
            style={
              tableScrollAndPinning === true
                ? {
                    minWidth: headerFields[headerFields.length - 1].width
                      ? `${headerFields[headerFields.length - 1].width}px`
                      : '150px',
                    backgroundColor: isThisChild ? '#f2f2f2' : '#ffffff',
                    right: pinRightColumns >= 1 ? '0px' : 'none',
                    position: pinRightColumns >= 1 ? 'sticky' : 'none',
                  }
                : {}
            }
          >
            <ChangeButton
              id={index}
              row={row}
              isRowEditable={row.isRowEditable}
              isRowToggleEnabled={row.isRowToggleEnabled}
              isRowDownloadEnabled={row.isRowDownloadEnabled}
              isRowEditEnabled={row.isRowEditEnabled}
              defaultToggle={row.defaultToggle}
              actionItemsEditable={tableOptions.actionItemsEditable}
              actionItemsNonEditable={tableOptions.actionItemsNonEditable}
              tableOptions={tableOptions}
              isToggleEnabled={tableOptions.isToggleEnabled}
              isDownloadEnabled={tableOptions.isDownloadEnabled}
              isEditEnabled={tableOptions.isEditEnabled}
              isDeleteEnabled={tableOptions.isDeleteEnabled}
              isRowDeleteEnabled={tableOptions.isRowDeleteEnabled}
              isUploadEnabled={tableOptions.isUploadEnabled}
              isRowUploadEnabled={tableOptions.isRowUploadEnabled}
              isOpenInNewEnabled={tableOptions.isOpenInNewEnabled}
              isRowOpenInNewEnabled={tableOptions.isRowOpenInNewEnabled}
              isLinkEnabled={tableOptions.isLinkEnabled}
              isRowLinkEnabled={tableOptions.isRowLinkEnabled}
              isBulkPublishEnabled={tableOptions.isBulkPublishEnabled}
              isRowBulkPublishEnabled={tableOptions.isRowBulkPublishEnabled}
              isBulkUpdateEnabled={tableOptions.isBulkUpdateEnabled}
              isRowBulkUpdateEnabled={tableOptions.isRowBulkUpdateEnabled}
              isPublishMappingEnabled={tableOptions.isPublishMappingEnabled}
              isRowPublishMappingEnabled={tableOptions.isRowPublishMappingEnabled}
              toggleTooltip={tableOptions.toggleTooltip}
              downloadTooltip={tableOptions.downloadTooltip}
              editTooltip={tableOptions.editTooltip}
              deleteTooltip={tableOptions.deleteTooltip}
              uploadTooltip={tableOptions.uploadTooltip}
              newTabTooltip={tableOptions.newTabTooltip}
              linkTooltip={tableOptions.linkTooltip}
              bulkPublishTooltip={tableOptions.bulkPublishTooltip}
              bulkUpdateTooltip={tableOptions.bulkUpdateTooltip}
              publishMappingTooltip={tableOptions.publishMappingTooltip}
            />
          </td>
        )}
      </>
    );
  }
}

ParentRow.propTypes = {
  tableOptions: PropTypes.object.isRequired,
  isActionsEnabled: PropTypes.bool,
  tableScrollAndPinning: PropTypes.bool,
  pinRightColumns: PropTypes.number,
  pinLeftColumns: PropTypes.number,
  visibilityArray: PropTypes.array,
  headerFields: PropTypes.array,
};

ParentRow.defaultProps = {
  isActionsEnabled: false,
  tableScrollAndPinning: false,
  pinRightColumns: 0,
  pinLeftColumns: 0,
  visibilityArray: [],
  headerFields: [],
};

export default ParentRow;
