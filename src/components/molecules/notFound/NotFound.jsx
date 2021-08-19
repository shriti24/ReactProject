import React from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import MCTypography from '../../atoms/typography.component';
import './NotFound.css';

const NotFound = (props) => {
  const location = useLocation();
  const { currentAppPath } = props;
  const { pathname } = location;

  const currentApp = (lPathname) => {
    const currentAppPathArr = currentAppPath.split(',');
    for(const currPath of currentAppPathArr) {
      if (lPathname.startsWith(currPath)) {
        return true;
      }
    }
    return false;
  };

  React.useEffect(() => {
    if (!currentApp(pathname)) {
      window.location.assign(pathname);
    }
  }, [location]);

  return (
    <div>
      {currentApp(pathname) && (
        <div className="error-page_content">
          <MCTypography variant="h1"> Sorry...</MCTypography>
          <div> The page you are looking for could not be found.</div>
          <Link href="/">Go to Home </Link>
        </div>
      )}
    </div>
  );
};

NotFound.propTypes = {
  currentAppPath: PropTypes.string.isRequired,
};
export default withRouter(NotFound);
