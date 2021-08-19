import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import PrimaryButton from '../../atoms/button.component';

class BulkUploadHistoryModal extends React.PureComponent {
  render() {
    const { openConfirmationModal, closeConfirmationModal } = this.props;
    return (
      <div>
        <Dialog
          open={openConfirmationModal}
          maxWidth="xs"
          fullWidth
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
          <DialogContent>
            <div>Are you sure you want to upload the file?</div>
          </DialogContent>
          <DialogActions>
            <PrimaryButton buttonLabel="Ok" onClick={() => closeConfirmationModal('ok')} />
            <PrimaryButton
              variant="outlined"
              buttonLabel="Cancel"
              onClick={() => closeConfirmationModal('cancel')}
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default BulkUploadHistoryModal;

BulkUploadHistoryModal.propTypes = {
  openConfirmationModal: PropTypes.bool.isRequired,
  closeConfirmationModal: PropTypes.func.isRequired,
};
