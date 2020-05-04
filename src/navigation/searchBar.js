import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import globalHook from 'use-global-hook';
import useGlobal from "../store";
import { useState, useEffect } from "react";


// const currencies = [
//   {
//     value: 'USD',
//     label: '$',
//   },
//   {
//     value: 'EUR',
//     label: '€',
//   },
//   {
//     value: 'BTC',
//     label: '฿',
//   },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
// ];
function longResolve() {
  return new Promise(res => {
    setTimeout(res, 3000);
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
    minWidth: 300
  }
}));

export default function MultilineTextFields() {
  const [globalState, globalActions] = useGlobal();
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('');
  const [currencies, setCurrencies] = React.useState([]);

  // const currencies =[]
  const handleChange = (event) => {
    setCurrency(event.target.value);
    globalActions.addAccount(event.target.value);
    console.log(globalState);
  };

  useEffect(() => {
     longResolve().then(() => {
       console.log(globalState.token.UserData.locationNum);
        fetch( "https://rest.garmentvendor.app/accounts?locationNum=" + globalState.token.UserData.locationNum, {
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
          value={currency}
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
