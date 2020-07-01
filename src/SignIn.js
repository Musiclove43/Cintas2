import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState, useEffect, useCallback, updateState} from "react";
import globalHook from 'use-global-hook';
import useGlobal from "./store";
import logo from './images/CintasLogo.png';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import ProtectedStore from './protected-store/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useParams,
  browserHistory
} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
    Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [globalState, globalActions] = useGlobal();
  const [email, setEmail] = useState('');
  const [passcode, setPasscode] = useState('')
  const [token, setToken] = useState('')
  const [redirectToReferrer, setRedirect] = useState(false)

  const [access, setAccess] = useState(false)
  const classes = useStyles();


//
// function login () {
//   console.log("I ran")
//   fakeAuth.authenticate(() => {
//     setRedirect(true)
//   }
// }


  useEffect(() => {
    // login()
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== "12345678") {
                return false;
            }
            return true;
        });
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    fetch( "https://rest.garmentvendor.app/auth" , {
      method: 'post',
      contentType: 'application/json',
      body: JSON.stringify({
        "email": email,
        "password": passcode
      })
    })
    .then(res => res.json())
    .then(
      (result) => {
        if(result.IsSuccess) {
          ProtectedStore.set('user',result);
          // todo: get rid of this..
          globalActions.addToken(result, passcode)
        }
        // globalActions.addUserLocation(result.UserData.locationNum)
        // globalActions.addUserData(result.Token)
      },
      (error) => {
        console.log(error)
      }
    )
    fetch( "https://rest.garmentvendor.app/auth" , {
        method: 'post',
        contentType: 'application/json',
             headers: {
          Authorization:
                 'Bearer' + token,
},
        body: JSON.stringify({
          "email": email,
          "password": passcode

        })
      })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)

          // setToken(result.Token)
        },
        (error) => {
          console.log(error)
        }
      )
        setAccess(true)
  };
  // console.log(globalState)

      if (access === true) {
        return <Redirect to='/dashboard' />
      }
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>

    <img style={{marginBottom: 15}} src={logo} alt="Logo" />


  {/*  <Typography component="h1" variant="h5">
    Sign in
    </Typography> */}
    <ValidatorForm id="signin-form" onSubmit={handleSubmit} className={classes.form} noValidate>
    <TextValidator
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"


    validators={['required', 'isEmail']}
    errorMessages={['this field is required', 'email is not valid']}
    value={email}
    onChange={e => setEmail(e.target.value)}
    autoFocus
    />
    <TextValidator
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
    value={passcode}
    onChange={e => setPasscode(e.target.value)}
    validators={['isPasswordMatch', 'required']}
    errorMessages={['password mismatch', 'this field is required']}
    />
    <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label="Remember me"
    />
    <Button
    type="submit"
    fullWidth
    variant="contained"
    color="secondary"
    form="signin-form"
    className={classes.submit}
    >
    Sign In
    </Button>
    <Grid container>
    <Grid item xs>
    <Link href="#" variant="body2">
    Forgot password?
    </Link>
    </Grid>
    <Grid item>
    <Link href="#" variant="body2">
    {"Don't have an account? Sign Up"}
    </Link>
    </Grid>
    </Grid>
    </ValidatorForm>
    </div>
    <Box mt={8}>
    <Copyright />
    </Box>
    </Container>
  );
}
