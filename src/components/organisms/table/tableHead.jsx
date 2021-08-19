import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import HeaderGroup from './headerGroup';
import './tableStyle.css';

class TableHead extends React.PureComponent {
  render() {
    const {
      tableOptions,
      isHeaderFixed,
      headerFields,
      headerFieldsGroup,
      isTableGroupingEnabled,
      visibilityArray,
      visibilityArrayGroup,
      tableScrollAndPinning,
      pinLeftColumns,
      pinRightColumns,
    } = this.props;
    return (
      <thead className="tableHeaderGroup">
        {isTableGroupingEnabled && (
          <tr>
            {headerFieldsGroup.map((headerField, index) => (
              <HeaderGroup
                isHeaderFixed={isHeaderFixed}
                visibility={visibilityArrayGroup[index]}
                key={headerField.key}
                label={headerField.label}
                colSpan={headerField.colSpan}
                style={headerField.style}
                columnNumber={index}
                tableScrollAndPinning={tableScrollAndPinning}
                headerFieldsGroup={headerFieldsGroup}
                pinLeftColumns={tableOptions.pinLeftColumns}
                pinRightColumns={tableOptions.pinRightColumns}
              />
            ))}
          </tr>
        )}
        <tr>
          {headerFields.map((headerField, index) => (
            <Header
              visibility={visibilityArray[index]}
              key={headerField.key}
              label={headerField.label}
              style={headerField.style}
              columnNumber={index}
              isTableGroupingEnabled={isTableGroupingEnabled}
              isHeaderFixed={isHeaderFixed}
              pinLeftColumns={pinLeftColumns}
              pinRightColumns={pinRightColumns}
              tableScrollAndPinning={tableScrollAndPinning}
              headerFields={headerFields}
            />
          ))}
        </tr>
      </thead>
    );
  }
}

TableHead.propTypes = {
  tableOptions: PropTypes.object.isRequired,
  isHeaderFixed: PropTypes.bool,
  headerFields: PropTypes.array,
  headerFieldsGroup: PropTypes.array,
  isTableGroupingEnabled: PropTypes.bool,
  visibilityArray: PropTypes.array,
  visibilityArrayGroup: PropTypes.array,
  tableScrollAndPinning: PropTypes.bool,
  pinLeftColumns: PropTypes.number,
  pinRightColumns: PropTypes.number,
};

TableHead.defaultProps = {
  isHeaderFixed: false,
  headerFields: [],
  headerFieldsGroup: [],
  isTableGroupingEnabled: false,
  visibilityArray: [],
  visibilityArrayGroup: [],
  tableScrollAndPinning: false,
  pinLeftColumns: 0,
  pinRightColumns: 0,
};

export default TableHead;
