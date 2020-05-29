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

export default React.memo(function AssignItem(props) {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('');
  const [sizes, setSizes] = useState([]);

  const [itemType, setItemType] = useState('')
  const [color, setColor] = useState('')
  const [days, setDays] = useState('')
  const [cellCap, setCellCap] = useState('')
  const [age, setAge] = useState('')
  const [allErr, setErr] = useState('')
  const [machines, setMachines] = React.useState([]);
  const [items, setItems] = useState([])

  const [token, setToken] = useGlobal(
    state => state.token,
  );
  const [account, setAccount] = useGlobal(
    state => state.account,
  );
  // const areEqual = (prevProps, nextProps) => true;
  //
  // const MyComponent = React.memo(props => {
  //   console.log("Equal") /*whatever jsx you like */
  // }, areEqual);

  //   React.memo(function MyComponent (props) {
  // console.log(props.value)
  //     // return <div>{ "My Component " + props.value }</div>;
  //
  //   })

  useEffect(() => {
    console.log('Loaded');

    // setUsers([]);
    callGetItems()
    // setReload(false)
  }, [])


  function callGetItems () {
    // setLoading(true)
    console.log("rerender")
    fetch( "https://rest.garmentvendor.app/items?accountNum=" + account, {
      method: 'get',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + globalState.token.Token,
      },
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        setItems([...result])
        // setLoading(false)
      },
      (error) => {
        console.log(error)
      }
    )
  };

  function selectedItem(value) {
    console.log(value)
    setItemType(value)
    fetch( "https://rest.garmentvendor.app/items/skus?itemID=" + value.itemID, {
      method: 'get',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + globalState.token.Token,
      },
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        setSizes([...result])
        // setLoading(false)
      },
      (error) => {
        console.log(error)
      }
    )
  };




  const submitAssign = e => {
    // const id = Math.floor(Math.random() * Date.now())
    console.log(itemType, size, cellCap)
    fetch( "https://rest.garmentvendor.app/station/cell" , {
      method: 'post',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + globalState.token.Token,
      },
      body: JSON.stringify({
        "stationNum": 5555,
        "cellNum": 2,
        "itemSkuID": size.itemSkuID,
        "maxQty": 43
      })
    })

    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
      }
    )
      props.callBack(true);
    // globalActions.addToUsers(data)
    handleClose()
    handleClear();
  };

  const handleClear = () => {
setItemType('')
setSize('')
setCellCap('')
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

    <ValidatorForm method="post" id="assign-item" onSubmit={submitAssign} noValidate>

    <Grid container spacing={3}>
    <Grid item xs={6} md={6} lg={6}>

    <FormControl className={classes.formControl}>
    <InputLabel id="demo-controlled-open-select-label">Item Type</InputLabel>
    <Select
    labelId="demo-controlled-open-select-label"
    id="demo-controlled-open-select"
    value={itemType}
    onChange={(e) => selectedItem(e.target.value)}
    >
    {items.map((item) => (
      <MenuItem key={item} value={item}>{item.itemDesc}</MenuItem>
    ))}
    </Select>
    </FormControl>
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <FormControl className={classes.formControl}>
    <InputLabel id="demo-controlled-open-select-label">Size/Color</InputLabel>
    <Select
    labelId="demo-controlled-open-select-label"
    id="demo-controlled-open-select"
    value={size}
    onChange={(e) => setSize(e.target.value)}
    >
    {sizes.map((option2) => (
      <MenuItem key={option2} value={option2}>{option2.color} {option2.size} - {option2.sku}</MenuItem>
    ))}
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
    <Button form="assign-item" type="submit" color="primary">
    Assign
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
})
