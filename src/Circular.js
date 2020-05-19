import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
        zIndex: 1000,
        backgroundColor: "grey",
        width: "100%",
   height: '100%',

      },
    },
    circle: {
      margin: "auto",
      backgroundColor: "transparent"

    }
  }),
);

export default function CircularIndeterminate() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
  return (
    <div className={classes.root}>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <CircularProgress className={classes.circle} color="secondary" />

        </Dialog>
    </div>



  );
}
