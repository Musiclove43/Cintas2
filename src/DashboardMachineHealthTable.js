import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormDialog from './formDialog';
import EditDialog from './editDialog';
import { useState, useEffect, useCallback, updateState, useContext } from "react";
import globalHook from 'use-global-hook'
import useGlobal from "./store";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import MultilineTextFields from './navigation/searchBar'
import CircularIndeterminate from './Circular'


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#002C6F",
    color: theme.palette.common.white,
    height: "20px"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    width: '80%',
  },
  table: {
    minWidth: 700,
  },
});


  export default function MachineHealthTable() {
    return (
        <div>
        
        <React.Fragment>

        <TableContainer component={Paper}>
        <Table aria-label="customized table">
        <TableHead>
        <TableRow>

        <StyledTableCell>Machine</StyledTableCell>
        <StyledTableCell align="right">Machine Type</StyledTableCell>
        <StyledTableCell align="right">Status</StyledTableCell>
        <StyledTableCell align="right">Alert Date and Time</StyledTableCell>
        <StyledTableCell align="right">Transactions Since PM</StyledTableCell>
        <StyledTableCell align="right">Date Since Last PM</StyledTableCell>

        </TableRow>
        </TableHead>
        <TableBody>
        
        {/*
        {user.map((user, i) => (
            <StyledTableRow key={i}>
            <StyledTableCell component="th" scope="row">
            {user.lastName}
            </StyledTableCell>
            <StyledTableCell align="right">{user.firstName}</StyledTableCell>
            <StyledTableCell align="right">{user.lastName}</StyledTableCell>
            <StyledTableCell align="right">{user.email}</StyledTableCell>
            <StyledTableCell align="right">{user.firstName}</StyledTableCell>
            <StyledTableCell align="right">{user.firstName}</StyledTableCell>
            <StyledTableCell align="right">{user.firstName}</StyledTableCell>
            <StyledTableCell align="right">{user.firstName}</StyledTableCell>
            <StyledTableCell align="right">{user.first}</StyledTableCell>
            <StyledTableCell align="right">
            <div>
            <IconButton
            edge="start"
            color="inherit"
            onClick={() => editUser(user)}
            >
            <EditIcon style={{ zIndex:2000}} />
            </IconButton>
            <IconButton
            edge="start"
            color="inherit"
            onClick={() => deleteUser(user)}
            >
            <HighlightOffIcon style={{ zIndex:2000}} />
            </IconButton>
            </div>
            </StyledTableCell>
            </StyledTableRow>
        ))}
        */}

        </TableBody>
        </Table>
        </TableContainer>
        </React.Fragment>
        
        </div>
    );
}
