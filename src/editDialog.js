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



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function EditDialog(props){
  console.log(props)
  // we want to pull in the global state
  const [open, setOpen] = useState(false);
  const [globalState, globalActions] = useGlobal();
  const [highlight, setHighlight] = useGlobal(
   state => state.highlighted
  );
  // set the hook data
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('')
  const [last, setLast] = useState('')
  const [first, setFirst] = useState('')

  // bring in the highlighted user


  // const [open, setOpen] = useGlobal(
  //  state => state.open,
  // );

  // testing
  // const _setData = (key, value) => {
  //   console.log("check state:",data);
  //   setData({key: value});
  // };


  const [count, setCount] = useState(0);


  // var start = true;
  //
  //   if(start) {
  //     // set the data
  //     const _highlight = {
  //       first: highlight.first,
  //       last: highlight.last,
  //       email: highlight.email,
  //       pass: highlight.pass
  //     };
  //     if(_highlight.first !== undefined &&
  //      _highlight.last !== undefined &&
  //      _highlight.email !== undefined &&
  //      _highlight.pass !== undefined) {
  //      setData(_highlight);
  //   }
  //     // highlight
  //
  //     start = false;
  //   }
  // useEffect(() => {
  //   console.log('props changes');
  //   // setUsers([]);
  //   // callAPI()
  // }, [props])



  useEffect(() => {
      // set the data
// console.log(highlight)
//
// let x = JSON.parse(JSON.stringify(highlight));
// // console.log(x.first )
// setFirst(x.first)
// console.log("first" + first)

});

  // useEffect() {
  //   // set the data
  //   let dynamicData = {};
  //   Object.keys(data).forEach(key => {
  //     dynamicData[key] = highlight[key];
  //   });
  //   setData(dynamicData);
  //
  //   console.log(dynamicData);
  //   console.log(highlight);
  //   console.log(data);
  // }

//
//  function findUser() {
//   if (open) {
//     let dynamicData = {};
//     Object.keys(data).forEach(key => {
//       dynamicData[key] = highlight[key];
//     });
//     setData(dynamicData);
//
//     console.log(dynamicData);
//     console.log(highlight);
//     console.log(data);
//
//
//   }
// //   // setIsLoading(false)
// }




// console.log("highlight" + highlight.id)


  // const forceUpdate = useCallback(() => updateState({}), []);

  const handleSubmit = e => {
    console.log(globalState.token.Token)
    e.preventDefault();
    fetch( "https://rest.garmentvendor.app/user/" + props.selectUser.userEmail.email , {
      method: 'Post',
      contentType: 'application/json',
      headers: {
        Authorization:
        'Bearer ' + globalState.token.Token,
      },
      body: JSON.stringify({
        "email": email,
        "firstName": 'harry',
        "lastName": 'klien',
        "accountNum": "0",
        "department": "",
        "cardID": "000000045",
        "credits": 0,
        "withdrawLimit": 0,
        "expirationDate": "2123-01-01T00:00:00Z"
      })
    })

    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
      }
    )
    // console.log("email, last, first, pass")
    // const guid = Math.floor(Math.random() * Date.now())
    // const data = {email, last, first, pass}
    // globalActions.updateUsers(data)
    // console.log(globalState);
    // document.getElementById("my-form-id").reset();
    props.callBack(true);
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
    };

    const handleClose = () => {
      setOpen(false);
    };

  // const handleClickOpen = () => {
  //   const open = true
  //
  //   globalActions.openDialog(open);
  //
  //
  //   // console.log(globalState);
  // };
  //
  // const handleClose = () => {
  //   // setOpen(false);
  //
  //   const open = false
  //   globalActions.openDialog(open)
  //   // console.log(globalState);
  // };

  return (
    <div>
    <Grid container spacing={3}>
    <Grid item xs={1.25} md={1.25} lg={1.25}>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
    ADD USER +
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
    <DialogTitle id="alert-dialog-slide-title">{"EDIT USER"}</DialogTitle>
    <DialogContent>
    <DialogContentText id="alert-dialog-slide-description">
    Let Google help apps determine location. This means sending anonymous location data to
    Google, even when no apps are running.
    </DialogContentText>
    <form method="post" id="my-form" onSubmit={handleSubmit}  noValidate>

    <Grid container spacing={3}>
    <Grid item xs={6} md={6} lg={6}>

    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="First Name"
    type="email"
    fullWidth
    onChange={(e) => setFirst(e.target.value)}
    value={first}
    // defaultValue={'hellow'}

      // defaultValue='${props.selectUser.userEmail.email}'

    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Last Name"
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
    onChange={(e) => setEmail(e.target.value)}
    value={email}

    />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
    <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Password"
    type="email"
    fullWidth

    />
    </Grid>

    </Grid>
    </form>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose} color="primary">
    Cancel
    </Button>
    <Button onClick={handleClose} form="my-form" type="submit" color="primary">
    Update User
    </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
}
