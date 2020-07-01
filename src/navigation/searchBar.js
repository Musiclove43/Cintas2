import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import globalHook from 'use-global-hook';
import useGlobal from "../store";
import { useState, useEffect, useContext } from "react";
import CustomizedTables from "../UserTables";
import ProtectedStore from '../protected-store/index';

function longResolve() {
  return new Promise(res => {
    setTimeout(res, 1000);
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  dropdown : {
    minWidth: 301
  }
}));

export default function MultilineTextFields(props) {

  const [globalState, globalActions] = useGlobal();
  const classes = useStyles();
  const [currency, setCurrency] = React.useState(props);
  const [currencies, setCurrencies] = React.useState([]);
  const handleChange = (event) => {
    setCurrency(event.target.value);
    props.onChange(event.target.value);
    globalActions.deleteAllUsers();
    globalActions.addAccount(event.target.value);
    // window._appEvents.dispatchEvent('site-changed', { site: event.target.value });
    // console.log('why is this not working?');
    // console.log(window._appEvents);
    // ProtectedStore.set('account', event.target.value);

  };

  useEffect(() => {
    longResolve().then(() => {
      console.log(globalState.account);
      fetch( "https://rest.garmentvendor.app/accounts?locationCode=" + ProtectedStore.get('user').UserData.locationCode, {
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
          setCurrencies([...result.accounts])
          console.log("currency array" + currencies)
          // setToken(result.Token)
        },
        (error) => {
          console.log(error)
        }
      )

    })
  }, []);


  return (
    <form className={classes.root} noValidate autoComplete="off">
    <div>

    <TextField
    id="standard-select-currency"
    select
    label="Site"
    value={props.value}
    onChange={handleChange}
    className={classes.dropdown}
    >
    {currencies.map((option) => (
      <MenuItem key={option.accountNum} value={option.accountNum}>
      {option.accountDesc}
      </MenuItem>
    ))}
    </TextField>

    </div>
    </form>
  );
}
