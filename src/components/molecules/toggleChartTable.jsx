import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TableChartIcon from '@material-ui/icons/TableChart';
import BarChartIcon from '@material-ui/icons/BarChart';

class ToggleChartTable extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      toggleButtonValue: 'left',
      tableIconColor: 'primary',
      chartIconColor: 'disabled',
    };
    this.handleChartTableChange = this.handleChartTableChange.bind(this);
  }

  handleChartTableChange(event, newAlignment) {
    const { onToggleChange } = this.props;
    if (newAlignment === 'left') {
      onToggleChange('table');
      this.setState({
        tableIconColor: 'primary',
        chartIconColor: 'disabled',
        toggleButtonValue: newAlignment,
      });
    } else if (newAlignment === 'right') {
      onToggleChange('chart');
      this.setState({
        tableIconColor: 'disabled',
        chartIconColor: 'primary',
        toggleButtonValue: newAlignment,
      });
    }
  }

  render() {
    const { toggleButtonValue, tableIconColor, chartIconColor } = this.state;
    return (
      <ToggleButtonGroup
        value={toggleButtonValue}
        size="small"
        exclusive
        aria-label="text alignment"
        onChange={this.handleChartTableChange}
      >
        <ToggleButton value="left" aria-label="left aligned">
          <TableChartIcon color={tableIconColor} />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <BarChartIcon color={chartIconColor} />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

ToggleChartTable.propTypes = {
  onToggleChange: PropTypes.func.isRequired,
};

export default ToggleChartTable;
