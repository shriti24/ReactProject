import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tableStyle.css';

class TableData extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      tableData: data,
    };

    this.updateField = this.updateField.bind(this);
  }

  updateField(event) {
    this.setState({
      tableData: event.target.value,
    });
  }

  render() {
    let cellComponent;
    const {
      data,
      header,
      isRowEditable,
      id,
      columnNumber,
      pinLeftColumns,
      tableScrollAndPinning,
      headerFields,
      pinRightColumns,
      visibility,
      cellStyle,
      isThisChild,
    } = this.props;
    let style = 'tableCell ';
    if (cellStyle !== undefined) {
      style += cellStyle;
    }
    let xScroll = '';
    if (
      tableScrollAndPinning === true &&
      (columnNumber < pinLeftColumns || columnNumber >= headerFields.length - pinRightColumns)
    ) {
      if (isThisChild) {
        xScroll = 'xScrollOdd rightBorder';
      } else {
        xScroll = 'xScrollEven rightBorder';
      }
    } else {
      xScroll = 'rightBorder';
    }
    const widthSize = headerFields[columnNumber].width ? headerFields[columnNumber].width : 150;
    let leftGap = 0;
    for (let index = 0; index < columnNumber; index += 1) {
      leftGap += headerFields[index].width ? headerFields[index].width + 16 : 150 + 16;
    }
    leftGap += 'px';

    let rightGap = 0;
    for (let index = 0; index < headerFields.length - columnNumber - 1; index += 1) {
      rightGap += headerFields[headerFields.length - index - 1].width
        ? headerFields[headerFields.length - index - 1].width + 16
        : 150 + 16;
    }
    rightGap += 'px';

    const { tableData } = this.state;
    if (header.type === 'link') {
      cellComponent = (
        <div
          className="tableCell editButton"
          tabIndex={id}
          role="button"
          onClick={() => {
            header.linkClick(id, data);
          }}
          onKeyDown={() => {
            header.linkClick(id, data);
          }}
        >
          {data}
        </div>
      );
    } else if (header.isEditable === true) {
      if (isRowEditable === true) {
        cellComponent = (
          <input
            type="textbox"
            onChange={(e) => this.updateField(e)}
            className="tableTextBox"
            value={tableData}
          />
        );
      } else {
        cellComponent = <div className={style}>{data}</div>;
      }
    } else {
      cellComponent = <div className={style}>{data}</div>;
    }
    return visibility ? (
      <td
        className={xScroll}
        style={
          tableScrollAndPinning === true
            ? {
                minWidth: `${widthSize}px`,
                left: columnNumber < pinLeftColumns ? leftGap : 'none',
                right: columnNumber >= headerFields.length - pinRightColumns ? rightGap : 'none',
              }
            : {}
        }
      >
        {cellComponent}
      </td>
    ) : null;
  }
}

TableData.propTypes = {
  header: PropTypes.object.isRequired,
  columnNumber: PropTypes.number.isRequired,
  id: PropTypes.any.isRequired,
  data: PropTypes.any,
  isRowEditable: PropTypes.bool,
  pinLeftColumns: PropTypes.number,
  tableScrollAndPinning: PropTypes.bool,
  pinRightColumns: PropTypes.number,
  headerFields: PropTypes.array,
  visibility: PropTypes.bool,
  cellStyle: PropTypes.string,
};
TableData.defaultProps = {
  data: '',
  isRowEditable: false,
  pinLeftColumns: 0,
  pinRightColumns: 0,
  tableScrollAndPinning: false,
  headerFields: [],
  visibility: true,
  cellStyle: '',
};

export default TableData;
