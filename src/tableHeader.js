import React from "react";
import { red, green } from "@material-ui/core/colors";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'



export default function TableHeader(props) {

    return (
        <Box display="flex" flexDirection="row" alignItems="center" p={2}>
            <Typography component="h2" variant="h7" gutterBottom>
                {props.children}
            </Typography>

            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                <Box bgcolor="success.main" p={1} m={2}></Box>
                    <Typography component="h6" variant="h8" gutterBottom>
                        Good
                    </Typography>
            </Box>

            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                <Box bgcolor="warning.main" p={1} m={2}></Box>
                    <Typography component="h6" variant="h8" gutterBottom>
                        Low
                    </Typography>
            </Box>

            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                <Box bgcolor="error.main" p={1} m={2}></Box>
                    <Typography component="h6" variant="h8" gutterBottom>
                        Critical
                    </Typography>
            </Box>
        </Box>
    );
}

TableHeader.propTypes = {
    children: PropTypes.node,
  };
