import { FormControl, FormGroup, FormLabel, FormControlLabel, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MCCheckbox from './checkbox.component';

export default class CheckBoxesGroup extends Component {
  constructor(props) {
    super(props);

    this.callOnChange = this.callOnChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.computeOptions = this.computeOptions.bind(this);
  }

  computeOptions(options, value) {
    const res = [];
    if (value === null || typeof value === 'undefined') {
      return res;
    }
    options.forEach((option) => {
      const lOption = {};
      lOption.checked = value.includes(option);
      lOption.onChange = this.handleChange;
      lOption.name = option;
      res.push(lOption);
    });
    return res;
  }

  handleChange(event) {
    const { onChange } = this.props;
    this.callOnChange(event.target.checked, onChange, event.target.name);
  }

  callOnChange(valueSelected, onChangeFunc, key) {
    const { value } = this.props;
    let nValue;
    if (valueSelected) {
      nValue = value.slice();
      nValue.push(key);
    } else {
      nValue = value.filter((e) => e !== key);
    }
    onChangeFunc(nValue);
  }

  render() {
    const { label, columns, options, value } = this.props;
    const getColumns = () => {
      if (columns === null || typeof columns === 'undefined' || columns <= 1) {
        return 12;
      }
      if (columns >= 6) {
        return 6;
      }
      return columns;
    };

    const computedOptions = this.computeOptions(options, value);

    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">{label}</FormLabel>
          <Grid container spacing={3}>
            <Grid item xs={12 / getColumns()}>
              <FormGroup row>
                {computedOptions.map((computedOption) => {
                  return (
                    <FormControlLabel
                      key={computedOption.name}
                      control={
                        <MCCheckbox
                          checked={computedOption.checked}
                          onChange={computedOption.onChange}
                          name={computedOption.name}
                        />
                      }
                      label={computedOption.name}
                    />
                  );
                })}
              </FormGroup>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    );
  }
}

CheckBoxesGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  columns: PropTypes.number,
};
CheckBoxesGroup.defaultProps = {
  columns: 1,
};
