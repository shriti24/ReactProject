import { Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../atoms/button.component';

const ConfirmationModal = (props) => {
  const { title, content, returnValue, showConfirmation, yesButton, noButton } = props;

  return (
    <>
      <Dialog open={showConfirmation} maxWidth="xs" fullWidth aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <PrimaryButton
            variant="outlined"
            buttonLabel={noButton}
            onClick={() => returnValue(false)}
          />
          <PrimaryButton buttonLabel={yesButton} onClick={() => returnValue(true)} />
        </DialogActions>
      </Dialog>
    </>
  );
};

ConfirmationModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  returnValue: PropTypes.func.isRequired,
  showConfirmation: PropTypes.bool.isRequired,
  yesButton: PropTypes.string,
  noButton: PropTypes.string,
};

ConfirmationModal.defaultProps = {
  title: 'Confirmation',
  content: '',
  yesButton: 'Yes',
  noButton: 'No',
};

export default ConfirmationModal;
