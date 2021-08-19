import React from 'react';
import PropTypes from 'prop-types';
import './tableStyle.css';

class Header extends React.PureComponent {
  render() {
    const {
      isHeaderFixed,
      visibility,
      label,
      columnNumber,
      pinLeftColumns,
      pinRightColumns,
      tableScrollAndPinning,
      headerFields,
      isTableGroupingEnabled,
      style,
    } = this.props;
    const widthSize = headerFields[columnNumber].width ? headerFields[columnNumber].width : 150;
    let classes = style;
    classes += ' tableData ';
    if (isHeaderFixed === true) {
      if (isTableGroupingEnabled === true) {
        classes += 'positionSticky50 ';
      } else {
        classes += 'positionSticky ';
      }
    }
    classes +=
      tableScrollAndPinning === true &&
      (columnNumber < pinLeftColumns || columnNumber >= headerFields.length - pinRightColumns)
        ? 'xScrollHeader'
        : '';

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
    return visibility ? (
      <td
        className={classes}
        style={
          tableScrollAndPinning === true
            ? {
                minWidth: `${widthSize}px`,
                left: columnNumber < pinLeftColumns ? leftGap : 'none',
                boxShadow: 'none',
                right: columnNumber >= headerFields.length - pinRightColumns ? rightGap : 'none',
              }
            : {}
        }
      >
        {label}
      </td>
    ) : null;
  }
}

Header.propTypes = {
  isTableGroupingEnabled: PropTypes.bool,
  isHeaderFixed: PropTypes.bool,
  visibility: PropTypes.bool,
  label: PropTypes.string.isRequired,
  columnNumber: PropTypes.number.isRequired,
  pinLeftColumns: PropTypes.number,
  pinRightColumns: PropTypes.number,
  tableScrollAndPinning: PropTypes.bool,
  style: PropTypes.string,
  headerFields: PropTypes.array,
};

Header.defaultProps = {
  isTableGroupingEnabled: false,
  isHeaderFixed: false,
  visibility: true,
  pinLeftColumns: 0,
  pinRightColumns: 0,
  tableScrollAndPinning: false,
  style: '',
  headerFields: [],
};

export default Header;
