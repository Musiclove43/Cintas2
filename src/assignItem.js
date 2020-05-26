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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useState, useEffect, useCallback, updateState, clearState} from "react";
import globalHook from 'use-global-hook';
import useGlobal from "./store";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
  }),
);


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AssignItem() {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('');
  const [itemType, setItemType] = useState('')
  const [color, setColor] = useState('')
  const [days, setDays] = useState('')
  const [cellCap, setCellCap] = useState('')
  const [age, setAge] = useState('')
  const [allErr, setErr] = useState('')
  const [machines, setMachines] = React.useState([]);



  const [token, setToken] = useGlobal(
    state => state.token,
  );
  const [account, setAccount] = useGlobal(
    state => state.account,
  );



  const handleSubmit = e => {
    const id = Math.floor(Math.random() * Date.now())
    console.log("token" + account)
    // globalActions.addToUsers(data)
    handleClose()
    handleClear();
  };

  const handleClear = () => {

  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Grid container spacing={3}>

    <Grid item>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
    Assign Item
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
    <DialogTitle id="alert-dialog-slide-title">{"ASSIGN INVENTORY"}</DialogTitle>
    <DialogContent>

    <ValidatorForm method="post" id="my-form-id" onSubmit={handleSubmit}  noValidate>

    <Grid container spacing={3}>
    <Grid item xs={6} md={6} lg={6}>

    <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Item Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Size</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Color</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Grid>


    <Grid item xs={6} md={6} lg={6}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    validators={['required']}
    errorMessages={['this field is required']}
    label="Days on hand"
    type="Days on hand"
    fullWidth
    value={days}
    onChange={e => setDays(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextValidator
    autoFocus
    margin="dense"
    id="name"
    validators={['required']}
    errorMessages={['this field is required']}
    label="Cell Capacity"
    type="Cell Capacity"
    fullWidth
    value={cellCap}
    onChange={e => setCellCap(e.target.value)}
    />
    </Grid>

    </Grid>
    </ValidatorForm>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose} color="primary">
    Cancel
    </Button>
    <Button form="my-form-id" type="submit" color="primary">
    Assign
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
}
