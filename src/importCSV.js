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
import {DropzoneArea} from 'material-ui-dropzone';


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
export default React.memo(function ImportCSV(){

  const [open, setOpen] = useState(false);
  const [globalState, globalActions] = useGlobal();

  const [propss, setProps] = useState('')
  const [select, setSelect] = useState('')
  const [file, setFile] = useState('')
  const [topic, setTopic] = useState(0)

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [last, setLast] = useState('')
  const [first, setFirst] = useState('')
  const [account, setAccount] = useGlobal(
    state => state.account,
  );
//   useEffect(() => {
//     // console.log('props Update');
//     console.log(props.selectUser)
// // console.log(props);
//   }, [props])

  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    // e.defaultValue()
      e.preventDefault();
    // console.log(props.selectUser.email)
    // console.log(email)
    console.log(globalState.token.Token)

    // fetch( "https://rest.garmentvendor.app/user/" + props.selectUser.email, {
    //   method: 'Post',
    //   contentType: 'application/json',
    //   headers: {
    //     Authorization:
    //     'Bearer ' + globalState.token.Token,
    //   },
    //   body: JSON.stringify({
    //     "email": email,
    //     "firstName": first,
    //     "lastName": last,
    //     "accountNum": globalState.account,
    //     "department": "",
    //     "cardID": "000000045",
    //     "credits": 0,
    //     "withdrawLimit": 0,
    //     "expirationDate": "2123-01-01T00:00:00Z"
    //   })
    // })
    //
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     console.log(result)
    //   }
    // )
    // props.callBack(true);
    handleClear();
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

    <Button   style={{ marginRight: 5, marginLeft: 5}} variant="outlined" color="secondary" onClick={handleClickOpen}>
    Import CSV
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
    <DialogTitle id="alert-dialog-slide-title">{"IMPORT CSV"}</DialogTitle>
    <DialogContent>
    <form id="my-form" onSubmit={handleSubmit}  noValidate>
    <Grid container spacing={3}>
    <Grid item xs={12} md={12} lg={12}>
    <DropzoneArea
    showPreviews={true}
            filesLimit={1}
            key={topic}
           onChange={handleChange.bind(this)}
           />
    </Grid>

    </Grid>
    </form>
    </DialogContent>
    <DialogActions>
    <Button variant="outlined" color="secondary" onClick={handleClose} color="primary">
    Cancel
    </Button>
    <Button variant="outlined" color="secondary" onClick={handleClose} form="my-form" type="submit" color="primary">
    Import CSV
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
})
