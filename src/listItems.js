import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import globalHook from 'use-global-hook';
import useGlobal from "./store";

import HomeIcon from '@material-ui/icons/Home';

import AssignmentIcon from '@material-ui/icons/Assignment';
import {NavLink, Redirect} from "react-router-dom";



export default function MainListItems() {
  const [globalState, globalActions] = useGlobal();

  const handleClick = () => (event) => {
    var data = 0;
    globalActions.addValue(data)

    console.log(globalState)
  };

return (
  <div>
  <NavLink style={{textDecoration: 'none', color: '#202020'}} to="/about/">
    <ListItem to="/about/widget" button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </NavLink>

    <NavLink style={{textDecoration: 'none', color: '#202020'}} to="/about/users">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    </NavLink>

      <NavLink style={{textDecoration: 'none', color: '#202020'}} to="/about/widget">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText   primary="Inventory" />
      </ListItem>
      </NavLink>

      <NavLink onClick={handleClick()} style={{textDecoration: 'none', color: '#202020'}} to="/about/swipe">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Configuration" />
      </ListItem>
      </NavLink>

      <NavLink style={{textDecoration: 'none', color: '#202020'}} to="/about/locations">
        <ListItem to="/about/widget" button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Locations" />
        </ListItem>
        </NavLink>

        <NavLink style={{textDecoration: 'none', color: '#202020'}} to="/about/locations">
          <ListItem to="/about/widget" button>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary="Truck" />
          </ListItem>
          </NavLink>
  </div>
)
};
