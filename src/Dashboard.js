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
import LocationMachine from './LocationMachine';
import ScrollableTabsButtonForce from './navigation/appBar2';

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

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  // root: {
  //   display: 'flex',
  // },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    position: "unset",
    // zIndex: theme.zIndex.drawer + 1,
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
function longResolve() {
  return new Promise(res => {
    setTimeout(res, 3000);
  });
}
// const useGlobal = globalHook();

export default function Dashboard() {
  const [globalState, globalActions] = useGlobal();

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [count, setCount] = useState("this is a count");
 //
 // useEffect(() => {
 //   longResolve().then(() => {
 //    alert(globalState.token);
 //   });
 // }, []);

//   useEffect(() => {
//     fetch( "https://rest.garmentvendor.app/accounts?locationNum=0", {
//         method: 'get',
//         contentType: 'application/json',
//              headers: {
//           Authorization:
//                  'Bearer' + token,
// },
//       })
//       .then(res => res.json())
//       .then(
//         (result) => {
//           console.log(result)
//
//           // setToken(result.Token)
//         },
//         (error) => {
//           console.log(error)
//         }
//       )
//   }, [])

// console.log(userLocation)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}  >
        <Toolbar className={classes.toolbar}>

          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            St. Joseph's Hospital
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

<ScrollableTabsButtonForce/>

      <main className={classes.content}>


        <Container maxWidth="lg" className={classes.container}>
        <Route exact path="/about" component={Widgets}/>
        <Route exact path="/about/widget" component={ControlledExpansionPanels}/>
        <Route exact path="/about/users" component={Users}/>
        <Route exact path="/about/locations" component={LocationReport}/>
        <Route exact path="/about/configurations" component={TabPanel}/>
        <Route exact path="/about/swipe" component={TabPanel}/>
        <Route exact path="/about/truck" component={LocationMachine}/>

        </Container>
        <Copyright />
      </main>
    </div>
  );
}
