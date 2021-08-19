import PropTypes from 'prop-types';
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

function Dropdown(props) {
  const { options, label, onChange, value, id, ...rest } = props;
  return (
    <Autocomplete
      {...rest}
      options={options}
      getOptionLabel={(option) => option.label || ''}
      onChange={(e, selectedValues) => {
        onChange(selectedValues, id);
      }}
      renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
      value={options.find((option) => option.value === value) || null}
    />
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string,
  size: PropTypes.string,
};

Dropdown.defaultProps = {
  size: 'small',
  label: '',
};

export default Dropdown;
