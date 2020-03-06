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

import HomeIcon from '@material-ui/icons/Home';

import AssignmentIcon from '@material-ui/icons/Assignment';
import {NavLink, Redirect} from "react-router-dom";



export const mainListItems = (
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

    <NavLink style={{textDecoration: 'none', color: '#202020'}} to="/about/locations">
      <ListItem to="/about/widget" button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Locations" />
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

      <NavLink style={{textDecoration: 'none', color: '#202020'}} to="/about/">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Configuration" />
      </ListItem>
      </NavLink>

  </div>
);
