import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "./images/logo_circle.png";
import { useHistory, useLocation } from 'react-router-dom';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "relative"
    },
    nav: {
        paddingLeft: "10%",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginTop: 5,
        marginBottom: 5,
    },
    title: {
        // flexGrow: 1,
        // color: "black",
        fontFamily: "Handlee",
        fontSize: 24,
        textTransform: "uppercase",
        fontWeight: "bold",
        float: "left",
    },
    links: {
          float: "right",
          position: "absolute",
          right: "10%",
        // flexGrow: 1,
        // marginRight: -150,
    },
    link: {
        padding: "10px 15px",
        fontSize: 16,
    },
    underlined: {
        // textDecoration: "underline",
        textDecorationColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
    }
}));

function Nav() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar className={classes.nav}>
                    <img src={logo} height="70px" className={classes.menuButton} alt="Communitree logo"/>
                    <Typography variant="h6" className={classes.title}>
                        Build a Communitree
          </Typography>
                    <div className={classes.links}>
                        <Button className={`${classes.link} ${location.pathname === '/' && classes.underlined}`}
                            onClick={() => history.push('/')}>Home</Button>
                        <Button className={`${classes.link} ${location.pathname === '/about' && classes.underlined}`}
                            onClick={() => history.push('/about')}>About</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;