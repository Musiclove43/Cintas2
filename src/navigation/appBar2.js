import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MultilineTextFields from './searchBar'
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Container from '@material-ui/core/Container';
import CustomizedTables from '../UserTables';
import { useState, useEffect, useContext } from "react";
import Machine from '../machine';




import AssignmentIcon from '@material-ui/icons/Assignment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink, Redirect,
  useRouteMatch,
  useParams,
  browserHistory,
  useHistory
} from "react-router-dom";
import Widgets from '../Widget';
import Users from '../Users';

import Machine2 from '../MachineOnsite'


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  // console.log(props)

  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`scrollable-force-tabpanel-${index}`}
    aria-labelledby={`scrollable-force-tab-${index}`}
    {...other}
    >
    {value === index && (
      <Box p={3}>
      <Typography>{children}</Typography>
      </Box>
    )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,

};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,

  },
  container: {
    // paddingTop: theme.spacing(2),
    // paddingBottom: theme.spacing(2),
    color: "grey",
    paddingLeft: 30
  },
  card: {
    // paddingTop: theme.spacing(2),
    // paddingBottom: theme.spacing(2),
    color: "red",
    // paddingLeft: 30
  },
}));

export default function ScrollableTabsButtonForce(props) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState('');

  let product = {
    conf: ''
  };

  useEffect(() => {
    product.conf = value2
  }, [value2]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleChange2(newValue) {
    setValue2(newValue);
  }

  const history = useHistory();

  function handleClick() {
    history.push("/about/users");
  }
  function handleDash() {
    history.push({pathname:"/about", propss: value2});
  }

  function handleInvent() {
    history.push("/about/configurations");
  }

  return (
    <div className={classes.root}>

    <AppBar position="unset" color="default" style={{flexDirection: "row", paddingLeft: 25, zIndex:100}}>
    <MultilineTextFields  onChange={handleChange2} />
    <Tabs
    value={value}
    onChange={handleChange}
    variant="scrollable"
    scrollButtons="on"
    indicatorColor="secondary"
    textColor="secondary"
    aria-label="scrollable force tabs example"
    >
    <Tab label="Dashboard" onClick={handleDash}  icon={<DashboardIcon />} {...a11yProps(0)} />
    <Tab label="Users" onClick={handleClick} icon={<PeopleIcon />} {...a11yProps(1)} />
    <Tab label="Inventory"  onClick={handleInvent} icon={<AssignmentIcon />} {...a11yProps(2)} />
    </Tabs>
    </AppBar>

    <TabPanel value={value} index={1} >
    <CustomizedTables product={product} />
    </TabPanel>
    <TabPanel {...props} value={value} index={2}>
    <Machine product={product}/>
    </TabPanel>

    </div>
  );
}
