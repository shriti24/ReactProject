import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import Textbox from './textbox.component';
// import { parseDate } from "@walmart/sams-common-utils/lib/date";
import PrimaryButton from './button.component';
import 'react-day-picker/lib/style.css';
import './atoms.css';

export default class DaterangePickerCustom extends Component {
  // static isValidDate(dateStr) {
  //   return /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateStr) ? parseDate(dateStr) : undefined;
  // }

  constructor(props) {
    super(props);

    this.state = {
      range: {
        to: props.to,
        from: props.from,
      },
      value: '',
      showCalendar: false,
    };

    // this.onUpdate = this.onUpdate.bind(this);
    // this.clearDays = this.clearDays.bind(this);
    this.onDayClick = this.onDayClick.bind(this);
    this.showCalendar = this.toggleCalendar.bind(this, true);
    this.hideCalendar = this.toggleCalendar.bind(this, false);
    this.onEventChange = this.onEventChange.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.hideCalendarOnclick = this.hideCalendarOnclick.bind(this);
    this.dateRangeSelect = this.dateRangeSelect.bind(this);
  }

  componentDidMount() {
    const { startDate, endDate, clearDateRange } = this.props;
    document.addEventListener('mousedown', this.handleClickOutside);
    if (clearDateRange === false) {
      this.onDayClick(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
      this.onDayClick(new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));
    }
  }

  componentDidUpdate(prevProps) {
    const { startDate, endDate, clearDateRange } = this.props;
    if (clearDateRange === false && prevProps.startDate && prevProps.endDate) {
      if (
        prevProps.startDate.getTime() !== startDate.getTime() ||
        prevProps.endDate.getTime() !== endDate.getTime()
      ) {
        this.onDayClick(
          new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
        );
        this.onDayClick(new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  onEventChange(e) {
    this.setState({ value: e.target.value });
  }

  onDayClick(day) {
    this.setState(
      (prevState) => ({ range: DateUtils.addDayToRange(day, prevState.range) }),
      this.onDateRangeSelect
    );
  }

  // onUpdate(value) {
  //   const range = value
  //     .split('-')
  //     .reduce(
  //       (prev, curr) =>
  //         prev.from
  //           ? { ...prev, to: this.isValidDate(curr.trim()) }
  //           : { from: this.isValidDate(curr.trim()) },
  //       {}
  //     );

  //   this.setState(() => ({ value, range }), this.onDateRangeSelect);
  // }

  onDateRangeSelect() {
    const { range } = this.state;
    const { onDateRangeSelect } = this.props;
    if (range.from && range.to && onDateRangeSelect) {
      onDateRangeSelect(range);
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  get formattedRange() {
    const { range } = this.state;
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return Object.keys(range)
      .reduce(
        (prev, curr) =>
          range[curr] ? prev.concat(range[curr].toLocaleDateString('en-US', options)) : prev,
        []
      )
      .join(' - ');
  }

  get displayValue() {
    const { value } = this.state;
    return this.formattedRange === value || !value ? this.formattedRange : value;
  }

  hideCalendarOnclick() {
    this.setState({ showCalendar: false });
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ showCalendar: false });
    }
  }

  // clearDays(event) {
  //   const { range } = this.state;
  //   const { onDateRangeSelect } = this.props;
  //   event.stopPropagation();
  //   const { to, from } = range;
  //   this.setState(() => ({
  //     range: {
  //       to: undefined,
  //       from: undefined,
  //     },
  //     value: '',
  //   }));

  //   // if there was a to and from and now there isn't, fire callback
  //   if (to && from && onDateRangeSelect) {
  //     onDateRangeSelect(undefined);
  //   }
  // }

  toggleCalendar(showCalendar, event) {
    event.stopPropagation();
    this.setState(() => ({ showCalendar }));
  }

  dateRangeSelect(rangePick) {
    const { range } = this.state;
    if (rangePick === 'This Month') {
      const firstDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
      const lastDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
      lastDate.setDate(lastDate.getDate() - 1);
      range.from = firstDate;
      range.to = lastDate;
      this.setState({ range });
    } else if (rangePick === 'Next Month') {
      const firstDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
      const lastDate = new Date(new Date().getFullYear(), new Date().getMonth() + 2, 1);
      lastDate.setDate(lastDate.getDate() - 1);
      range.from = firstDate;
      range.to = lastDate;
      this.setState({ range });
    } else if (rangePick === 'Last Month') {
      const firstDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
      const lastDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
      lastDate.setDate(lastDate.getDate() - 1);
      range.from = firstDate;
      range.to = lastDate;
      this.setState({ range });
    } else if (rangePick === 'M-1 to M+1') {
      const firstDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
      const lastDate = new Date(new Date().getFullYear(), new Date().getMonth() + 2, 1);
      lastDate.setDate(lastDate.getDate() - 1);
      range.from = firstDate;
      range.to = lastDate;
      this.setState({ range });
    } else if (rangePick === 'M-2 to M+2') {
      const firstDate = new Date(new Date().getFullYear(), new Date().getMonth() - 2, 1);
      const lastDate = new Date(new Date().getFullYear(), new Date().getMonth() + 3, 1);
      lastDate.setDate(lastDate.getDate() - 1);
      range.from = firstDate;
      range.to = lastDate;
      this.setState({ range });
    } else if (rangePick === 'M-3 to M+3') {
      const firstDate = new Date(new Date().getFullYear(), new Date().getMonth() - 3, 1);
      const lastDate = new Date(new Date().getFullYear(), new Date().getMonth() + 4, 1);
      lastDate.setDate(lastDate.getDate() - 1);
      range.from = firstDate;
      range.to = lastDate;
      this.setState({ range });
    } else if (rangePick === 'M+2') {
      const firstDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
      const lastDate = new Date(new Date().getFullYear(), new Date().getMonth() + 3, 1);
      lastDate.setDate(lastDate.getDate() - 1);
      range.from = firstDate;
      range.to = lastDate;
      this.setState({ range });
    } else if (rangePick === 'M+3') {
      const firstDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
      const lastDate = new Date(new Date().getFullYear(), new Date().getMonth() + 4, 1);
      lastDate.setDate(lastDate.getDate() - 1);
      range.from = firstDate;
      range.to = lastDate;
      this.setState({ range });
    }
    this.onDateRangeSelect();
  }

  render() {
    const { range, showCalendar } = this.state;
    const { to, from } = range;
    const { label, resetDateRange } = this.props;
    const modifiers = { start: from, end: to };
    return (
      <div>
        <div ref={this.setWrapperRef}>
          <div>
            <Textbox
              label={label}
              value={this.displayValue}
              onChange={this.onEventChange}
              onFocus={this.showCalendar}
              readOnly
            />
            {showCalendar && (
              <div
                style={{
                  position: 'fixed',
                  background: '#fff',
                  border: '1px solid #ccc',
                  zIndex: '100',
                  borderRadius: '4px',
                }}
              >
                <div style={{ float: 'left' }}>
                  <div>
                    <DayPicker
                      className="Selectable"
                      numberOfMonths={2}
                      selectedDays={[from, { from, to }]}
                      modifiers={modifiers}
                      onDayClick={this.onDayClick}
                      menuPortalTarget={document.body}
                    />
                  </div>
                  <div>
                    <PrimaryButton
                      style={{ float: 'right', margin: '0px 18px 10px', width: '230px' }}
                      buttonLabel="Done"
                      onClick={this.hideCalendarOnclick}
                    />
                    <PrimaryButton
                      style={{ margin: '0px 18px 10px', width: '230px' }}
                      buttonLabel="Reset"
                      onClick={() => {
                        this.setState(() => ({
                          range: {
                            to: undefined,
                            from: undefined,
                          },
                          value: '',
                        }));
                        resetDateRange();
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    float: 'right',
                    height: '315px',
                    width: '150px',
                    background: '#f2f2f2',
                    margin: '16px',
                    borderRadius: '4px',
                  }}
                >
                  <div
                    className="datepick"
                    tabIndex={0}
                    role="button"
                    onKeyDown={() => this.dateRangeSelect('This Month')}
                    onClick={() => this.dateRangeSelect('This Month')}
                  >
                    This Month
                  </div>
                  <div
                    className="datepick"
                    tabIndex={-1}
                    role="button"
                    onKeyDown={() => this.dateRangeSelect('Next Month')}
                    onClick={() => this.dateRangeSelect('Next Month')}
                  >
                    Next Month
                  </div>
                  <div
                    className="datepick"
                    tabIndex={-2}
                    role="button"
                    onKeyDown={() => this.dateRangeSelect('Last Month')}
                    onClick={() => this.dateRangeSelect('Last Month')}
                  >
                    Last Month
                  </div>
                  <div
                    className="datepick"
                    tabIndex={-2}
                    role="button"
                    onKeyDown={() => this.dateRangeSelect('M-1 to M+1')}
                    onClick={() => this.dateRangeSelect('M-1 to M+1')}
                  >
                    M-1 to M+1
                  </div>
                  <div
                    className="datepick"
                    tabIndex={-1}
                    role="button"
                    onKeyDown={() => this.dateRangeSelect('M-2 to M+2')}
                    onClick={() => this.dateRangeSelect('M-2 to M+2')}
                  >
                    M-2 to M+2
                  </div>
                  <div
                    className="datepick"
                    tabIndex={-1}
                    role="button"
                    onKeyDown={() => this.dateRangeSelect('M-3 to M+3')}
                    onClick={() => this.dateRangeSelect('M-3 to M+3')}
                  >
                    M-3 to M+3
                  </div>
                  <div
                    className="datepick"
                    tabIndex={-1}
                    role="button"
                    onKeyDown={() => this.dateRangeSelect('M+2')}
                    onClick={() => this.dateRangeSelect('M+2')}
                  >
                    M+2
                  </div>
                  <div
                    className="datepick"
                    tabIndex={-1}
                    role="button"
                    onKeyDown={() => this.dateRangeSelect('M+3')}
                    onClick={() => this.dateRangeSelect('M+3')}
                  >
                    M+3
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

DaterangePickerCustom.propTypes = {
  to: PropTypes.instanceOf(Date),
  from: PropTypes.instanceOf(Date),
  label: PropTypes.string,
  onDateRangeSelect: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  clearDateRange: PropTypes.bool,
  resetDateRange: PropTypes.func,
};

DaterangePickerCustom.defaultProps = {
  to: null,
  from: null,
  label: '',
  startDate: new Date(),
  endDate: new Date(),
  clearDateRange: true,
  resetDateRange: () => {},
};
