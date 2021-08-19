import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import './tableStyle.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Checkbox } from '@material-ui/core';
import InnerTable from './innerTable';
import TablePinningShadows from './tablePinningShadows';

class TableWrapper extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      visibilityArray: [],
      visibilityArrayGroup: [],
      datarows: [],
      internalPaginationCount: 1,
    };

    this.changeColumnVisibility = this.changeColumnVisibility.bind(this);
    this.hamburger = this.hamburger.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    const { headerFields, headerFieldsGroup, isTableGroupingEnabled } = this.props;
    this.setData();
    const visibilityArrayColumns = [];
    const visibilityArrayGroupColumns = [];
    if (!isTableGroupingEnabled) {
      for (let index = 0; index < headerFields.length; index += 1) {
        if (headerFields[index].visibility === true || headerFields[index].visibility === false) {
          visibilityArrayColumns.push(headerFields[index].visibility);
        } else {
          visibilityArrayColumns.push(true);
        }
      }
      this.setState({ visibilityArray: visibilityArrayColumns });
    } else {
      for (let index = 0; index < headerFieldsGroup.length; index += 1) {
        if (
          headerFieldsGroup[index].visibility === true ||
          headerFieldsGroup[index].visibility === false
        ) {
          visibilityArrayGroupColumns.push(headerFieldsGroup[index].visibility);
          if (headerFieldsGroup[index].colSpan === undefined) {
            visibilityArrayColumns.push(
              visibilityArrayGroupColumns[visibilityArrayGroupColumns.length - 1]
            );
          } else {
            for (
              let innerIndex = 0;
              innerIndex < headerFieldsGroup[index].colSpan;
              innerIndex += 1
            ) {
              visibilityArrayColumns.push(
                visibilityArrayGroupColumns[visibilityArrayGroupColumns.length - 1]
              );
            }
          }
        } else {
          visibilityArrayGroupColumns.push(true);
          if (headerFieldsGroup[index].colSpan === undefined) {
            visibilityArrayColumns.push(
              visibilityArrayGroupColumns[visibilityArrayGroupColumns.length - 1]
            );
          } else {
            for (
              let innerIndex = 0;
              innerIndex < headerFieldsGroup[index].colSpan;
              innerIndex += 1
            ) {
              visibilityArrayColumns.push(
                visibilityArrayGroupColumns[visibilityArrayGroupColumns.length - 1]
              );
            }
          }
        }
      }

      this.setState({
        visibilityArray: visibilityArrayColumns,
        visibilityArrayGroup: visibilityArrayGroupColumns,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { rows, tablePagination } = this.props;
    const equals =
      prevProps.rows.length === rows.length && rows.every((e, i) => e === prevProps.rows[i]);

    if (!equals || prevProps.tablePagination !== tablePagination) {
      this.setData();
    }
  }

  onPageChange(e, value) {
    const { rows } = this.props;
    this.setState({ datarows: rows.slice((value - 1) * 10, value * 10) });
  }

  setData() {
    const { tablePagination, rows } = this.props;
    if (!tablePagination) {
      this.setState({ datarows: rows });
    } else {
      this.setState({
        datarows: rows.slice(0, 9),
        internalPaginationCount: Math.ceil(rows.length / 10),
      });
    }
  }

  hamburger(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  changeColumnVisibility(index) {
    const { headerFieldsGroup, isTableGroupingEnabled } = this.props;
    if (!isTableGroupingEnabled) {
      const { visibilityArray } = this.state;
      const visibilityChanged = { ...visibilityArray };
      visibilityChanged[index] = !visibilityArray[index];
      this.setState({ visibilityArray: visibilityChanged });
    } else {
      const newVisibilityArray = [];
      const { visibilityArrayGroup } = this.state;
      const visibilityChanged = Object.assign(visibilityArrayGroup);
      visibilityChanged[index] = !visibilityArrayGroup[index];
      for (let innerIndex = 0; innerIndex < visibilityChanged.length; innerIndex += 1) {
        if (headerFieldsGroup[innerIndex].colSpan === undefined) {
          newVisibilityArray.push(visibilityChanged[innerIndex]);
        } else {
          for (let i = 0; i < headerFieldsGroup[innerIndex].colSpan; i += 1) {
            newVisibilityArray.push(visibilityChanged[innerIndex]);
          }
        }
      }
      this.setState({
        visibilityArrayGroup: visibilityChanged,
        visibilityArray: newVisibilityArray,
      });
    }
  }

  render() {
    const {
      anchorEl,
      visibilityArray,
      visibilityArrayGroup,
      datarows,
      internalPaginationCount,
    } = this.state;
    const {
      tableOptions,
      paginationCount,
      isHeaderFixed,
      isHamburgerEnabled,
      tableHeight,
      isDisableHorizontalScroll,
      isPaginationEnabled,
      isTableGroupingEnabled,
      tablePagination,
      headerFields,
      headerFieldsGroup,
    } = this.props;
    return (
      <div style={{ position: 'relative' }}>
        <TablePinningShadows
          tableOptions={tableOptions}
          isPaginationEnabled={isPaginationEnabled}
          headerFields={headerFields}
        />
        {isHamburgerEnabled && (
          <div>
            <div
              style={{
                zIndex: 3,
                height: '40px',
                width: '30px',
                position: 'absolute',
                right: '1px',
                top: '1px',
                cursor: 'pointer',
                textAlign: 'center',
                paddingTop: '13px',
                backgroundColor: '#ffffff',
              }}
            >
              <MenuIcon color="primary" onClick={this.hamburger} />
            </div>

            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                  width: 'auto',
                },
              }}
            >
              {!isTableGroupingEnabled && (
                <div>
                  {headerFields
                    .filter((option) => option.mappedTitle !== 'action')
                    .map((option, index) => (
                      <MenuItem key={option.key}>
                        <Checkbox
                          color="primary"
                          checked={visibilityArray[index]}
                          onChange={() => this.changeColumnVisibility(index)}
                        />
                        {option.label}
                      </MenuItem>
                    ))}
                </div>
              )}
              {isTableGroupingEnabled && (
                <div>
                  {headerFieldsGroup
                    .filter((option) => option.mappedTitle !== 'action')
                    .map((option, index) => (
                      <MenuItem key={option.key}>
                        <Checkbox
                          color="primary"
                          checked={visibilityArrayGroup[index]}
                          onChange={() => this.changeColumnVisibility(index)}
                        />
                        {option.label}
                      </MenuItem>
                    ))}
                </div>
              )}
            </Menu>
          </div>
        )}
        <div
          className="tableSkeleton tableHeight"
          style={isHeaderFixed === true ? { height: tableHeight } : { height: 'auto' }}
        >
          <InnerTable
            tableOptions={tableOptions}
            rows={datarows}
            headerFields={headerFields}
            isHeaderFixed={isHeaderFixed}
            visibilityArray={visibilityArray}
            visibilityArrayGroup={visibilityArrayGroup}
            isDisableHorizontalScroll={isDisableHorizontalScroll}
            headerFieldsGroup={headerFieldsGroup}
            isTableGroupingEnabled={isTableGroupingEnabled}
            pinLeftColumns={tableOptions.pinLeftColumns}
            pinRightColumns={tableOptions.pinRightColumns}
            tableScrollAndPinning={tableOptions.tableScrollAndPinning}
          />
        </div>
        {isPaginationEnabled && (
          <div
            style={{
              width: 'calc(100% - 2px)',
              height: '50px',
              background: '#ffffff',
              paddingTop: '7px',
              border: '#ccc 1px solid',
              borderTop: 'none',
            }}
          >
            {!tablePagination && (
              <div className="floatRight">
                <Pagination
                  count={paginationCount}
                  onChange={tableOptions.onPageChange}
                  color="primary"
                />
              </div>
            )}
            {tablePagination && (
              <div className="floatRight">
                <Pagination
                  count={internalPaginationCount}
                  onChange={this.onPageChange}
                  color="primary"
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

TableWrapper.propTypes = {
  tableOptions: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
  paginationCount: PropTypes.number,
  isHeaderFixed: PropTypes.bool,
  isHamburgerEnabled: PropTypes.bool,
  tableHeight: PropTypes.string,
  isDisableHorizontalScroll: PropTypes.bool,
  isPaginationEnabled: PropTypes.bool,
  isTableGroupingEnabled: PropTypes.bool,
  headerFields: PropTypes.array,
  headerFieldsGroup: PropTypes.array,
  tablePagination: PropTypes.bool,
};

TableWrapper.defaultProps = {
  paginationCount: 1,
  isHeaderFixed: false,
  isHamburgerEnabled: false,
  tableHeight: '500px',
  isDisableHorizontalScroll: false,
  isPaginationEnabled: false,
  isTableGroupingEnabled: false,
  headerFields: [],
  headerFieldsGroup: [],
  tablePagination: false,
};

export default TableWrapper;
