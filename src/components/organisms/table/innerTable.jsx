import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './tableRow';
import './tableStyle.css';
import TableHead from './tableHead';

class InnerTable extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { pinLeftColumnsModified: 0, pinRightColumnsModified: 0 };
  }

  componentDidMount() {
    const {
      pinLeftColumns,
      pinRightColumns,
      tableScrollAndPinning,
      headerFieldsGroup,
      isTableGroupingEnabled,
    } = this.props;

    if (tableScrollAndPinning) {
      if (!isTableGroupingEnabled) {
        this.setState({
          pinLeftColumnsModified: pinLeftColumns,
          pinRightColumnsModified: pinRightColumns,
        });
      } else {
        let pinLeft = 0;
        let pinRight = 0;
        for (let index = 0; index < pinLeftColumns; index += 1) {
          if (headerFieldsGroup[index].colSpan === undefined) {
            pinLeft += 1;
          } else {
            pinLeft += headerFieldsGroup[index].colSpan;
          }
        }
        for (let index = 0; index < pinRightColumns; index += 1) {
          if (headerFieldsGroup[headerFieldsGroup.length - index - 1].colSpan === undefined) {
            pinRight += 1;
          } else {
            pinRight += headerFieldsGroup[headerFieldsGroup.length - index - 1].colSpan;
          }
        }
        this.setState({ pinLeftColumnsModified: pinLeft, pinRightColumnsModified: pinRight });
      }
    }
  }

  render() {
    const {
      tableOptions,
      rows,
      isHeaderFixed,
      isDisableHorizontalScroll,
      headerFields,
      visibilityArray,
      visibilityArrayGroup,
      headerFieldsGroup,
      isTableGroupingEnabled,
      tableScrollAndPinning,
    } = this.props;
    const { pinLeftColumnsModified, pinRightColumnsModified } = this.state;
    let tableScrollClasses = 'tableBackgroundColor ';
    tableScrollClasses += isDisableHorizontalScroll === true ? '' : 'overflowXScroll';
    return (
      <table className={tableScrollClasses}>
        <TableHead
          tableOptions={tableOptions}
          isHeaderFixed={isHeaderFixed}
          headerFields={headerFields}
          headerFieldsGroup={headerFieldsGroup}
          visibilityArray={visibilityArray}
          visibilityArrayGroup={visibilityArrayGroup}
          isTableGroupingEnabled={isTableGroupingEnabled}
          pinLeftColumns={pinLeftColumnsModified}
          pinRightColumns={pinRightColumnsModified}
          tableScrollAndPinning={tableScrollAndPinning}
        />
        <TableRow
          tableOptions={tableOptions}
          rows={rows}
          visibilityArray={visibilityArray}
          isActionsEnabled={tableOptions.isActionsEnabled}
          pinRightColumns={pinRightColumnsModified}
          pinLeftColumns={pinLeftColumnsModified}
          tableScrollAndPinning={tableScrollAndPinning}
          headerFields={headerFields}
        />
      </table>
    );
  }
}

InnerTable.propTypes = {
  tableOptions: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
  isHeaderFixed: PropTypes.bool,
  isDisableHorizontalScroll: PropTypes.bool,
  headerFields: PropTypes.array,
  visibilityArray: PropTypes.array,
  visibilityArrayGroup: PropTypes.array,
  pinLeftColumns: PropTypes.number,
  pinRightColumns: PropTypes.number,
  tableScrollAndPinning: PropTypes.bool,
  isTableGroupingEnabled: PropTypes.bool,
};

InnerTable.defaultProps = {
  isHeaderFixed: false,
  isDisableHorizontalScroll: false,
  headerFields: [],
  visibilityArray: [],
  visibilityArrayGroup: [],
  pinLeftColumns: 0,
  pinRightColumns: 0,
  tableScrollAndPinning: false,
  isTableGroupingEnabled: false,
};

export default InnerTable;
