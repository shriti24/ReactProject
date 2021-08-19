import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';
import ParentRow from './parentRow';
import './tableStyle.css';

class TableRow extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { rowExpandVisibilityArray: [] };

    this.changeRowExpandCollapse = this.changeRowExpandCollapse.bind(this);
    this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    const { rows } = this.props;
    const rowExpandArr = [];
    for (let i = 0; i < rows.length; i += 1) {
      rowExpandArr.push(false);
    }
    this.setState({ rowExpandVisibilityArray: rowExpandArr });
  }

  componentDidUpdate(prevProps) {
    const { rows } = this.props;
    const equals =
      prevProps.rows.length === rows.length && rows.every((e, i) => e === prevProps.rows[i]);

    if (!equals) {
      this.setData();
    }
  }

  setData() {
    const { rows } = this.props;
    const rowExpandArr = [];
    for (let i = 0; i < rows.length; i += 1) {
      rowExpandArr.push(false);
    }
    this.setState({ rowExpandVisibilityArray: rowExpandArr });
  }

  changeRowExpandCollapse(index) {
    const { rowExpandVisibilityArray } = this.state;
    const rowExpandArr = { ...rowExpandVisibilityArray };
    rowExpandArr[index] = !rowExpandArr[index];
    this.setState({ rowExpandVisibilityArray: rowExpandArr });
  }

  render() {
    const {
      tableOptions,
      rows,
      isActionsEnabled,
      tableScrollAndPinning,
      pinRightColumns,
      pinLeftColumns,
      visibilityArray,
      headerFields,
    } = this.props;

    const { rowExpandVisibilityArray } = this.state;

    let xScroll = '';
    let xScroll2 = '';
    if (tableScrollAndPinning === true) {
      xScroll = 'xScrollEven rightBorder';
      xScroll2 = 'xScrollOdd rightBorder';
    } else {
      xScroll = 'rightBorder';
      xScroll2 = 'rightBorder';
    }
    const leftGap = '0px';

    return (
      <tbody>
        {rows.map((row, index) => {
          return (
            <>
              <tr key={row.key} className="tableRow">
                {tableOptions.isExpandCollapseEnabled &&
                  !rowExpandVisibilityArray[index] &&
                  row.children !== undefined &&
                  row.children !== null &&
                  row.children.length > 0 && (
                    <td className={xScroll} style={{ textAlign: 'center', left: leftGap }}>
                      <AddIcon
                        color="primary"
                        onClick={() => this.changeRowExpandCollapse(index)}
                      />
                    </td>
                  )}
                {tableOptions.isExpandCollapseEnabled &&
                  !rowExpandVisibilityArray[index] &&
                  (row.children === undefined ||
                    row.children === null ||
                    row.children.length <= 0) && (
                    <td className={xScroll} style={{ textAlign: 'center', left: leftGap }}>
                      <Tooltip title="No data to show">
                        <AddIcon color="disabled" />
                      </Tooltip>
                    </td>
                  )}
                {tableOptions.isExpandCollapseEnabled && rowExpandVisibilityArray[index] && (
                  <td className={xScroll} style={{ textAlign: 'center', left: leftGap }}>
                    <RemoveIcon
                      color="primary"
                      onClick={() => this.changeRowExpandCollapse(index)}
                    />
                  </td>
                )}
                <ParentRow
                  tableOptions={tableOptions}
                  row={row}
                  index={index}
                  isActionsEnabled={isActionsEnabled}
                  tableScrollAndPinning={tableScrollAndPinning}
                  pinRightColumns={pinRightColumns}
                  pinLeftColumns={pinLeftColumns}
                  visibilityArray={visibilityArray}
                  headerFields={headerFields}
                />
              </tr>
              {rowExpandVisibilityArray[index] &&
                row.children.map((childrow, childindex) => {
                  return (
                    <tr key={childrow.key} className="tableRowChild">
                      {tableOptions.isExpandCollapseEnabled && (
                        <td className={xScroll2} style={{ textAlign: 'center', left: leftGap }} />
                      )}
                      <ParentRow
                        isThisChild
                        tableOptions={tableOptions}
                        row={childrow}
                        index={childindex}
                        isActionsEnabled={isActionsEnabled}
                        tableScrollAndPinning={tableScrollAndPinning}
                        pinRightColumns={pinRightColumns}
                        pinLeftColumns={pinLeftColumns}
                        visibilityArray={visibilityArray}
                        headerFields={headerFields}
                      />
                    </tr>
                  );
                })}
            </>
          );
        })}
      </tbody>
    );
  }
}

TableRow.propTypes = {
  tableOptions: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
  isActionsEnabled: PropTypes.bool,
  tableScrollAndPinning: PropTypes.bool,
  pinRightColumns: PropTypes.number,
  pinLeftColumns: PropTypes.number,
  visibilityArray: PropTypes.array,
  headerFields: PropTypes.array,
};

TableRow.defaultProps = {
  isActionsEnabled: false,
  tableScrollAndPinning: false,
  pinRightColumns: 0,
  pinLeftColumns: 0,
  visibilityArray: [],
  headerFields: [],
};

export default TableRow;
