import React from 'react';
import { Checkbox } from '@material-ui/core';

function MCCheckbox(props) {
  const { ...rest } = props;

  return <Checkbox color="primary" {...rest} />;
}

export default MCCheckbox;
