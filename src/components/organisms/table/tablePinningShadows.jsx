import React from 'react';
import PropTypes from 'prop-types';
import './tableStyle.css';

class TablePinningShadows extends React.PureComponent {
  render() {
    const { tableOptions, isPaginationEnabled, headerFields } = this.props;

    // Width and Height calculation for left and right shadow while pinning
    let leftGap = 0;
    let rightGap = 0;
    if (tableOptions.tableScrollAndPinning === true) {
      for (let index = 0; index < tableOptions.pinLeftColumns; index += 1) {
        leftGap += headerFields[index].width ? headerFields[index].width + 16 : 150 + 16;
      }
      leftGap -= 20;
      leftGap += 'px';

      for (let index = 0; index < tableOptions.pinRightColumns; index += 1) {
        rightGap += headerFields[headerFields.length - index - 1].width
          ? headerFields[headerFields.length - index - 1].width + 16
          : 150 + 16;
      }
      rightGap -= 20;
      rightGap += 'px';
    }

    let shadowHeight = 'calc(100% - 25px)';
    if (isPaginationEnabled === true) {
      shadowHeight = 'calc(100% - 75px)';
    }

    return (
      <>
        {tableOptions.tableScrollAndPinning && tableOptions.pinLeftColumns > 0 && (
          <div className="leftShadow" style={{ width: leftGap, height: shadowHeight }} />
        )}
        {tableOptions.tableScrollAndPinning && tableOptions.pinRightColumns > 0 && (
          <div className="rightShadow" style={{ width: rightGap, height: shadowHeight }} />
        )}
      </>
    );
  }
}

TablePinningShadows.propTypes = {
  tableOptions: PropTypes.object.isRequired,
};

export default TablePinningShadows;
