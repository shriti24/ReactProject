import React, { useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

function Toast(props) {
  const { alertMessage, severity, showAlert, onClose } = props;
  const [open, setOpen] = React.useState(showAlert);

  const handleAutoClose = () => {
    if (showAlert) {
      onClose();
      setOpen(false);
    }
  };

  const closeOnUnmount = () => {
    onClose();
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      closeOnUnmount();
    };
  }, []);

  useEffect(() => {
    let timer1;
    if (showAlert) {
      setOpen(showAlert);
      timer1 = setTimeout(() => handleAutoClose(), 5000);
    }
    return () => {
      if (timer1) {
        clearTimeout(timer1);
      }
    };
  }, [showAlert]);

  return (
    <>
      <Collapse in={open}>
        <div className="padding20px">
          <Alert
            severity={severity}
            action={(
              <IconButton
                aria-label="close"
                color="primary"
                size="small"
                onClick={() => {
                  setOpen(false);
                  if (typeof onClose === 'function') onClose();
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            )}
          >
            {alertMessage}
          </Alert>
        </div>
      </Collapse>
    </>
  );
}
Toast.propTypes = {
  alertMessage: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
  showAlert: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

Toast.defaultProps = {
  onClose: () => {},
};

export default Toast;
