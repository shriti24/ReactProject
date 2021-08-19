import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

function PrimaryButton(props) {
  const { buttonLabel, ...rest } = props;
  return (
    <Button style={{ textTransform: 'none' }} {...rest}>
      {buttonLabel}
    </Button>
  );
}
PrimaryButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
};

PrimaryButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
};

export default PrimaryButton;
