import React from 'react';
import PropTypes from 'prop-types';
import './tableStyle.css';

class HeaderGroup extends React.PureComponent {
  render() {
    const {
      isHeaderFixed,
      visibility,
      label,
      columnNumber,
      pinLeftColumns,
      pinRightColumns,
      tableScrollAndPinning,
      headerFieldsGroup,
      style,
      colSpan,
    } = this.props;
    const widthSize = headerFieldsGroup[columnNumber].width
      ? headerFieldsGroup[columnNumber].width
      : 150;
    let classes = style;
    classes += ' tableData ';
    classes += isHeaderFixed === true ? 'positionSticky ' : '';
    classes +=
      tableScrollAndPinning === true &&
      (columnNumber < pinLeftColumns || columnNumber >= headerFieldsGroup.length - pinRightColumns)
        ? 'xScrollHeader'
        : '';
    let leftGap = 0;
    for (let index = 0; index < columnNumber; index += 1) {
      leftGap += headerFieldsGroup[index].width ? headerFieldsGroup[index].width + 16 : 150 + 16;
    }
    leftGap += 'px';

    let rightGap = 0;
    for (let index = 0; index < headerFieldsGroup.length - columnNumber - 1; index += 1) {
      rightGap += headerFieldsGroup[headerFieldsGroup.length - index - 1].width
        ? headerFieldsGroup[headerFieldsGroup.length - index - 1].width + 16
        : 150 + 16;
    }
    rightGap += 'px';

    return visibility ? (
      <td
        colSpan={colSpan}
        className={classes}
        style={
          tableScrollAndPinning === true
            ? {
                minWidth: `${widthSize}px`,
                left: columnNumber < pinLeftColumns ? leftGap : 'none',
                right:
                  columnNumber >= headerFieldsGroup.length - pinRightColumns ? rightGap : 'none',
              }
            : {}
        }
      >
        {label}
      </td>
    ) : null;
  }
}

HeaderGroup.propTypes = {
  isHeaderFixed: PropTypes.bool,
  visibility: PropTypes.bool,
  label: PropTypes.string.isRequired,
  columnNumber: PropTypes.number.isRequired,
  pinLeftColumns: PropTypes.number,
  pinRightColumns: PropTypes.number,
  tableScrollAndPinning: PropTypes.bool,
  style: PropTypes.string,
  colSpan: PropTypes.number,
  headerFieldsGroup: PropTypes.array,
};

HeaderGroup.defaultProps = {
  isHeaderFixed: false,
  visibility: true,
  pinLeftColumns: 0,
  pinRightColumns: 0,
  tableScrollAndPinning: false,
  style: '',
  colSpan: 1,
  headerFieldsGroup: [],
};

export default HeaderGroup;
