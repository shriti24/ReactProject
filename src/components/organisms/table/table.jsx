import React from 'react';
import PropTypes from 'prop-types';
import TableWrapper from './tableWrapper';

class Table extends React.PureComponent {
  render() {
    const { tableOptions, rows, paginationCount } = this.props;
    return (
      <TableWrapper
        tableOptions={tableOptions}
        rows={rows}
        paginationCount={paginationCount}
        isHeaderFixed={tableOptions.isHeaderFixed}
        isHamburgerEnabled={tableOptions.isHamburgerEnabled}
        tableHeight={tableOptions.tableHeight}
        tableHeading={tableOptions.tableHeading}
        isDisableHorizontalScroll={tableOptions.isDisableHorizontalScroll}
        isPaginationEnabled={tableOptions.isPaginationEnabled}
        isTableGroupingEnabled={tableOptions.isTableGroupingEnabled}
        headerFields={tableOptions.headerFields}
        headerFieldsGroup={tableOptions.headerFieldsGroup}
        tablePagination={tableOptions.tablePagination}
      />
    );
  }
}

Table.propTypes = {
  tableOptions: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
  paginationCount: PropTypes.number,
};

Table.defaultProps = {
  paginationCount: 1,
};

export default Table;
