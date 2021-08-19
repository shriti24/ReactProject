import React from 'react';
import { Radio } from '@material-ui/core';
import PropTypes from 'prop-types';


function RadioButton(props){
    const { ...rest } = props;

  return <Radio  {...rest} />;
}
RadioButton.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string,
    size : PropTypes.string,
};
RadioButton.defaultProps={
    color: 'primary',
    variant: 'contained',
    size:'small',
};

export default RadioButton;
