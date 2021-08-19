import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

function Textbox(props) {
  const { value, inputType, readOnly, ...rest } = props;

  return (
    <form noValidate autoComplete="off" style={{ marginBlockEnd: 0 }}>
      <TextField
        value={value !== null ? value : ''}
        type={inputType}
        InputProps={{
          readOnly,
        }}
        {...rest}
      />
    </form>
  );
}
Textbox.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  value: PropTypes.any,
  inputType: PropTypes.string,
  readOnly: PropTypes.bool,
};

Textbox.defaultProps = {
  variant: 'outlined',
  size: 'small',
  fullWidth: true,
  value: '',
  inputType: 'text',
  readOnly: false,
};

export default Textbox;
