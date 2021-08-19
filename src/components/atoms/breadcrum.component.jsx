import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './atoms.css';

function handleClick(event, path, props) {
  event.preventDefault();
  props.history.push(`${path}`);
}

function Breadcrumb(props) {
  const { pageTitle, breadcumLinks } = props;
  return (
    <div className="paddingTop0px">
      <Grid>
        <div>
          <Grid className="breadcrum-title">{pageTitle}</Grid>
        </div>
        <div>
          <Grid>
            <Breadcrumbs aria-label="breadcrumb">
              {breadcumLinks.map((breadcrumb) => {
                return (
                  <div
                    style={{ color: '#1565c0', cursor: 'pointer' }}
                    tabIndex={breadcrumb.key}
                    key={breadcrumb.key}
                    role="button"
                    onClick={(e) => handleClick(e, breadcrumb.path, props)}
                    onKeyDown={(e) => handleClick(e, breadcrumb.path, props)}
                  >
                    {breadcrumb.title}
                  </div>
                );
              })}
              <Typography style={{ color: '#424242' }}>{pageTitle}</Typography>
            </Breadcrumbs>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
Breadcrumb.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  breadcumLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withRouter(Breadcrumb);
