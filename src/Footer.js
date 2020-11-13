import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from "./images/logo_circle.png";
import { Link, useHistory, useLocation } from 'react-router-dom';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 80,
        textAlign: "center",
        flexGrow: 1,
    },
    footer: {
        top: "auto",
        bottom: 0,
    },
    copyright: {
        flexGrow: 1,
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.footer}>
                <Toolbar>
                    <Typography className={classes.copyright}>
                        © Zoe Bott 2020
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}