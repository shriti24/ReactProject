import PropTypes from 'prop-types';
import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

function SelectDropdown(props) {
  const { label, value, options, disabled, ...rest } = props;
  const lOptions = options === null || typeof options === 'undefined' ? [] : options;
  return (
    <FormControl variant="outlined" fullWidth size="small" disabled={disabled}>
      <InputLabel id="{label}">{label}</InputLabel>
      <Select labelId="{label}" value={(value!==null) ? value : ''} label={label} {...rest}>
        {lOptions.map((displayOption) => {
          return (
            <MenuItem key={displayOption.value} value={displayOption.value}>
              {displayOption.text}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

SelectDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  disabled: PropTypes.bool,
};

SelectDropdown.defaultProps = {
  value: '',
  disabled: false,
};

export default SelectDropdown;
