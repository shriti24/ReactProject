import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MCBaseLayout from './layout/mcbaselayout';

const ProtectedRoute = ({ component: Component, layout: MCBaseLayout, ...rest }) => {
  const isAuthenticated = () => {
    return true;
  };
  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated() ? <MCBaseLayout><Component {...props} /> </MCBaseLayout> : <Redirect to="/logout" />)}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any,
};

ProtectedRoute.defaultProps = {
  layout: MCBaseLayout,
};

export default ProtectedRoute;
