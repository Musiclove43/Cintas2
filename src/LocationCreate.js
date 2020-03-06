import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';



// import Title from './Title';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LocationCreate() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Grid container spacing={3}>
    <Grid item xs={1.25} md={1.25} lg={1.25}>

    <Typography style={{paddingTop: 5, paddingBottom: 20}} component="h2" variant="h5" >LOCATION</Typography>
    </Grid>
    <Grid item xs={1.25} md={1.25} lg={1.25}>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
    +
    </Button>
    </Grid>
    </Grid>
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
    >
    <DialogTitle id="alert-dialog-slide-title">{"CREATE ITEM"}</DialogTitle>
    <DialogContent>

    <Grid container spacing={3}>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Email Address"
    type="email"
    fullWidth
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Email Address"
    type="email"
    fullWidth
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Email Address"
    type="email"
    fullWidth
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Email Address"
    type="email"
    fullWidth
    />
    </Grid>
    </Grid>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose} color="primary">
    Disagree
    </Button>
    <Button onClick={handleClose} color="primary">
    Agree
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
}
