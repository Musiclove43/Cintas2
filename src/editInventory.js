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
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {DropzoneArea} from 'material-ui-dropzone';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
});


export default function EditInventory() {
  const classes = useStyles();
  // useEffect(() => {
  //   setEmail(globalState.highlighted);
  //    // code to run on component mount
  //  }, [])
  // const [open, setOpen] = useGlobal(false);
  const [title, setTitle] = useState('');
  const [qty, setQty] = useState('')
  const [credits, setCredits] = useState('')
  const [sku, setSku] = useState('')
  const [file, setFile] = useState('')
  const [topic, setTopic] = useState(0)
  const [globalState, globalActions] = useGlobal();
  const [size, setSize] = React.useState('');


  const [inventory, setInventory] = useGlobal(
   state => state.inventory,
   // actions => actions.addToCounterA
 );

  const [open, setOpen] = useGlobal(
   state => state.open,
 );

//  const [state, setHighlight] = useGlobal(
//   state => state.open,
//
// );



  // const forceUpdate = useCallback(() => updateState({}), []);

  const handleSubmit = e => {
    e.preventDefault();

    // const guid = Math.floor(Math.random() * Date.now())
    const data = {title, qty, credits, sku, file, size}
    globalActions.updateInventory(data)
    // console.log(globalState);
    // document.getElementById("my-form-id").reset();
    handleClear();
  };

  const handleClear = () => {
      setTitle('');
      setQty('')
      setCredits('')
      setSku('')
      setFile('')
      setSize('')
      setTopic(topic + 1)

    }


  const handleClickOpen = () => {
    const open = true
    globalActions.openDialog(open);
    // console.log(globalState);
  };

  const handleClose = () => {
    // setOpen(false);

    const open = false
    globalActions.openDialog(open)
    // console.log(globalState);
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
  if (file2 == undefined){
    console.log("nothing here")
  } else {
    getBase64(file2).then(base64 => {
      localStorage["fileBase64"] = base64;
      console.debug("file stored",base64);
      setFile(localStorage.fileBase64)
    })
  }
  console.log(file2)
}

  return (
    <div>

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
    <form method="post" id="editInventory" onSubmit={handleSubmit}  noValidate>

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
    <DropzoneArea
    showPreviews={true}
            filesLimit={1}
            key={topic}
           onChange={handleChange.bind(this)}
           />
    </Grid>
    <Grid item >
    <FormControl className={classes.formControl}>
         <InputLabel id="demo-simple-select-label">Size</InputLabel>
         <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={size}
           onChange={e => setSize(e.target.value)}
         >
           <MenuItem value={"Small"}>Small</MenuItem>
           <MenuItem value={"Medium"}>Medium</MenuItem>
           <MenuItem value={"Large"}>Large</MenuItem>
         </Select>
       </FormControl>
    </Grid>
    </Grid>
    </form>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose} color="primary">
    Cancel
    </Button>
    <Button onClick={handleClose} form="editInventory" type="submit"  color="primary">
    Update Item
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
}
