import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MainListItems from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Widgets from './Widget';
import Inventory from './Inventory';
import ControlledExpansionPanels from './InventoryCreate'
import Users from './Users';
import LocationReport from './locationReport';
import Configuration from './Configuration';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SwipeLocation from './swipeLocation';
import {NavLink, Redirect} from "react-router-dom";
import AssignmentIcon from '@material-ui/icons/Assignment';


import {
  BrowserRouter as Router,
  Switch,
  Route,

  useRouteMatch,
  useParams,
  browserHistory
} from "react-router-dom";
import { useState, useEffect } from "react";
// import globalHook from 'use-global-hook'
import useGlobal from "./store";
import TabPanel from './swipe'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  title: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));
// const useGlobal = globalHook();

export default function Dashboard2() {
  const [globalState, globalActions] = useGlobal();

  const classes = useStyles();
  const handleClick = () => (event) => {
    var data = 0;
    globalActions.addValue(data)
    console.log(globalState)
  };
  const handleClickUser = (num) => (event) => {
    var data = num;
    globalActions.swipeUser(data)
    console.log(globalState)
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
    <div className={classes.root}>

    <main className={classes.content}>
    <div style={{display: 'flex', flexDirection: 'row', paddingBottom: 8}}>
    <Typography style={{paddingTop: 5, paddingBottom: 20, marginRight: 25}} component="h2" variant="h5" >St. Joseph's Hospital</Typography>
    <div style={{marginTop: -7}}>
    <IconButton
    edge="start"
    color="inherit"
    >
    <AssignmentIcon onClick={handleClickUser(0)} color="secondary"  style={{ zIndex:2000, fontSize: 30}} />
    </IconButton>
    <IconButton
    edge="start"
    color="inherit"
    style={{ marginRight: 10}}
    >

    <PersonAddIcon onClick={handleClickUser(1)}  color="secondary" style={{ zIndex:2000, fontSize: 30}} />
    </IconButton>

    <IconButton
    edge="start"
    color="inherit"
    >
    <StoreMallDirectoryIcon onClick={handleClickUser(2)} color="secondary"  style={{ zIndex:2000, fontSize: 30}} />
    </IconButton>


    </div>
    <Button onClick={handleClick()} style={{marginLeft: "auto", marginTop: -9, marginBottom: 10, paddingTop: 1, paddingBottom: 1}} variant="outlined" color="primary" >
    <ArrowBackIcon style={{ marginRight: 7, fontSize: 20}}/>
    Back
    </Button>
    </div>

    <SwipeLocation/>



    </main>
    </div>
  );
}
