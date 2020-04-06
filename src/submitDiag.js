import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import globalHook from 'use-global-hook';
import useGlobal from "./store";

export default function SubmitDiag() {
  const [globalState, globalActions] = useGlobal();
  const [open, setOpen] = useGlobal(
   state => state.open,
 );
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    const open = true
    globalActions.openDialog(open);
  };

  const handleClose = () => {
    const open = false
    globalActions.openDialog(open)
  };

  return (
    <div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{align: 'center'}}>{"SUCCESS"}</DialogTitle>

      </Dialog>
    </div>
  );
}
