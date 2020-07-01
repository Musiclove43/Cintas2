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
import ReactDOM from "react-dom";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ProtectedStore from './protected-store/index';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const areEqual = (prevProps, nextProps) => {
  if (prevProps === nextProps) {
    return true;
  } else {
    return false;
  }
};
// var somename = "cathy"
export default React.memo(function LimitGroups(){

  const [open, setOpen] = useState(false);
  const [globalState, globalActions] = useGlobal();

  const [propss, setProps] = useState('')
  const [select, setSelect] = useState('')

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [last, setLast] = useState('')
  const [first, setFirst] = useState('')
  const [account, setAccount] = useGlobal(
    state => state.account,
  );
  const [fields, setFields] = useState([{limitGroupTitle: null, creditLimit: null}]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].limitGroupTitle = event.target.value;
    setFields(values);
    console.log(fields)
  }

  function handleChange2(i, event) {
    const values = [...fields];
    values[i].creditLimit = parseInt(event.target.value);
    setFields(values);
    console.log(fields)
  }

  function handleAdd() {
    const values = [...fields];
    values.push({limitGroupTitle: null, creditLimit: null});
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
  //   useEffect(() => {
  //     // console.log('props Update');
  //     console.log(props.selectUser)
  // // console.log(props);
  //   }, [props])

  const [count, setCount] = useState(0);




  const handleSubmitLimit = (e) => {
    // e.defaultValue()
    e.preventDefault();
delete Array.prototype.toJSON;
    function replacer(key, value) {
      // Filtering out properties
      if (typeof value === 'number') {
      console.log("we found numbr")
      }
      return value;
    }
    let fields2 = JSON.stringify(fields)

    console.log(JSON.stringify(fields))
    // console.log(props.selectUser.email)
    console.log(JSON.stringify(fields))

    console.log(ProtectedStore.get('user').Token)

    fetch( "https://rest.garmentvendor.app/limitGroups" , {
      method: 'Post',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + ProtectedStore.get('user').Token,
      },
    body: JSON.stringify({
      "accountNum": account,
      "limitGroups": fields
    })
    })

    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
      }
    )
    // props.callBack(true);
    handleClear();
  };

  const handleClear = () => {
    setEmail('');
    setPass('')
    setFirst('')
    setLast('')
  }
  const handleClickOpen = () => {
    setOpen(true);
    // console.log(props.selectUser, "SelectedUser")
    //   setSelect(props.selectUser)
    //   globalActions.editUsers(props.selectUser);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function onChange2(e){
    console.log("here we are")
  };

  return (
    <div>
    <Grid container spacing={3}>
    <Grid item>

    <Button variant="outlined"  color="secondary" onClick={handleClickOpen}>
    Manage Limit Groups
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
    <DialogTitle id="alert-dialog-slide-title">{"LIMIT GROUPS"}</DialogTitle>
    <DialogContent>
    <form id="my-limitform" onSubmit={handleSubmitLimit}  noValidate>
    {  /*  <Grid container spacing={4}>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    label="User Type"
    type="email"
    fullWidth
    onChange={(e) => setFirst(e.target.value)}
    value={first}
    />
    </Grid>
    <Grid item xs={4} md={4} lg={4}>
    <TextField
    autoFocus
    margin="dense"
    label="Credit Limit"
    type="email"
    fullWidth
    onChange={(e) => setLast(e.target.value)}
    value={last}
    />
    </Grid>
    <Grid item xs={2} md={2} lg={2}>
    <IconButton
    edge="start"
    color="inherit"
    onClick={handleClickOpen}
    style={{paddingTop: 25}}
    >
    <DeleteIcon/>
    </IconButton>
    </Grid>
    </Grid> */}
    {fields.map((field, idx) => {
      return (

        <Grid container spacing={2} key={`${field}-${idx}`}>
        <Grid item xs={6} md={6} lg={6}>
        <TextField
        autoFocus
        margin="dense"
        label="User Type"
        fullWidth
        type="text"
        placeholder="Enter text"
        onChange={e => handleChange(idx, e)}
        />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
        <TextField
        autoFocus
        margin="dense"
        label="Credit Limit"
        fullWidth
        type="text"
        placeholder="Enter text"
        onChange={e => handleChange2(idx, e)}
        />
        </Grid>
        <Grid style={{paddingTop: 25}} item xs={2} md={2} lg={2}>
        <IconButton
        edge="start"
        color="inherit"
        onClick={() => handleRemove(idx)}
        >
        <DeleteIcon />
        </IconButton>
        </Grid>
        </Grid>

      );
    })}
    </form>
    <Button onClick={() => handleAdd()} color="secondary" color="primary">
    + Add Limit Group
    </Button>
    </DialogContent>

    <DialogActions>

    <Button variant="outlined" color="secondary" onClick={handleClose} color="primary">
    Cancel
    </Button>
    <Button variant="outlined" color="secondary" onClick={handleClose} form="my-limitform" type="submit" color="primary">
    Update Groups
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
})
