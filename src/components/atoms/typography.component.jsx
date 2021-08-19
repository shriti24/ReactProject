import React from 'react';
import { Typography } from '@material-ui/core';

function MCTypography(props) {
  const { ...rest } = props;

  return <Typography {...rest} />;
}

export default MCTypography;
