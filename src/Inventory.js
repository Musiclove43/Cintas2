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
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useState, useEffect, useCallback, updateState, clearState} from "react";
import globalHook from 'use-global-hook';
import useGlobal from "./store";
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {DropzoneArea} from 'material-ui-dropzone'





const useStyles = makeStyles({

  input:{
    marginRight: 15,
    flexBasis: "22%",
    marginTop: 15,

  },

});


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Inventory() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState('');
  const [qty, setQty] = useState('')
  const [credits, setCredits] = useState('')
  const [sku, setSku] = useState('')
  const [file, setFile] = useState('')

  const [globalState, globalActions] = useGlobal();
 //  const [open, setOpen] = useGlobal(
 //   state => state.open,
 // );


  // const forceUpdate = useCallback(() => updateState({}), []);

  const handleSubmit = e => {
    e.preventDefault();
    const id = Math.floor(Math.random() * Date.now())
    const data = {id, title, qty, credits, sku, file}
    globalActions.addToInventory(data)
    console.log(globalState);
    // document.getElementById("my-form-id").reset();
    handleClear();
  };

  const handleClear = () => {
      setTitle('');
      setQty('')
      setCredits('')
      setSku('')
      setFile('')
    }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getBase64 = file2 => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file2);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
//
//   const imageUpload = (file) => {
//     console.log(file)
//     // const file = e.target.value[0];
//     const file = new FormData();
//             file.append('file', file);
//             console.log(file)
//   getBase64(file).then(base64 => {
//     localStorage["fileBase64"] = base64;
//     console.debug("file stored",base64);
//   });
//
//

// };

const  handleChange = (file)=> {
  var file2 = file[0]
    getBase64(file2).then(base64 => {
      localStorage["fileBase64"] = base64;
      console.debug("file stored",base64);
        setFile(localStorage.fileBase64)
    });

  console.log(file2)
}
  return (
    <div>
    <Grid container spacing={3}>
    <Grid item xs={1.25} md={1.25} lg={1.25}>
    <Typography style={{paddingTop: 5, paddingBottom: 20}} component="h2" variant="h5" >INVENTORY</Typography>
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
    <form method="post" id="my-form-item" onSubmit={handleSubmit}  noValidate>

    <Grid container spacing={3}>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Title"
    type="email"
    fullWidth
    value={title}
    onChange={e => setTitle(e.target.value)}
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Qty"
    type="email"
    value={qty}
    onChange={e => setQty(e.target.value)}
    fullWidth
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="credits"
    label="Credits"
    type="credits"
    value={credits}
    onChange={e => setCredits(e.target.value)}
    fullWidth
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Stock #"
    type="email"
    value={sku}
    onChange={e => setSku(e.target.value)}
    fullWidth
    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <img id="target" src={file}/>

    <DropzoneArea
    showPreviews={true}
           onChange={handleChange.bind(this)}
           />
    </Grid>
    </Grid>
    </form>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose} color="primary">
    Cancel
    </Button>
    <Button onClick={handleClose} form="my-form-item" type="submit"  color="primary">
    Create
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
}
