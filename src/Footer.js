import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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