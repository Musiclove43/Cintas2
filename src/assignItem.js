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
import ProtectedStore from './protected-store/index';


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
// console.log(props.cellNum)
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('');
  const [sizes, setSizes] = useState([]);
  const [propss, setProps] = useState('');

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

//   function sizeSelect() {
//   console.log(value)
//   let newSize = value;
//     setSize({...size, newSize});
//
// }

// useEffect(() => {
// setcellNum(props)
// // console.log("assignItem")
//   // setReload(false)
// }, [props])


const sizeSelect = e => {
  // let newSize = e.target.value;
  setSize(e.target.value);
  console.log(size)
  globalActions.activeEdit(e.target.value)
};

// const cellCapacity = e => {
//   // let newSize = e.target.value;
//   setCellCap(e);
//   globalActions.cellCapacity(cellCap)
//   console.log(globalState)
// };


  function callGetItems () {
    // setLoading(true)
    console.log("rerender")
    fetch( "https://rest.garmentvendor.app/items?accountNum=" + account, {
      method: 'get',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + ProtectedStore.get('user').Token,
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
        'Bearer ' + ProtectedStore.get('user').Token,
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
      e.preventDefault();
      console.log(globalState);
    fetch( "https://rest.garmentvendor.app/station/cell" , {
      method: 'post',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + ProtectedStore.get('user').Token,
      },
      body: JSON.stringify({
        "stationID": parseInt(globalState.setmachine.selectmachine),
        "cellNum": globalState.setmachine.cellNum,
        "itemSkuID": globalState.activeEdit.itemSkuID,
        "maxQty": 43
      })
    })

    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        props.callBack(true);
      }
    )

    // globalActions.addToUsers(data)
    handleClose()
    handleClear();
  };

  const handleClear = () => {
    setItemType('')
    setSize('')
    // setCellCap('')
  }


  const handleClickOpen = () => {
    setOpen(true);
    setProps(props)
    console.log(props)
    globalActions.setMachine(props)
    console.log(globalState)
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

    <form method="post" id="assign-item" onSubmit={submitAssign} noValidate>

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
    {items.map((item,i) => (
      <MenuItem key={i} value={item}>{item.itemDesc}</MenuItem>
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
    onChange={sizeSelect}
    >
    {sizes.map((option2,i) => (
      <MenuItem key={i} value={option2}>{option2.color} {option2.size} - {option2.sku}</MenuItem>
    ))}
    </Select>
    </FormControl>
    </Grid>


    <Grid item xs={6} md={6} lg={6}>
    <TextField
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
    </form>
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
