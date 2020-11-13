import { makeStyles } from '@material-ui/core';
import React from 'react';
import community from './images/community_background.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
    },
    banner: {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${community})`,
        height: 200,
        width: "100%",
        backgroundSize: "cover",
        paddingTop: 150,
        // paddingLeft: 110,
        paddingBottom: 0,
    },
    header: {
        margin: 0,
        color: "white",
        fontFamily: "Handlee",
        fontSize: 30,
        marginBottom: 30,
    },
    main: {
        marginTop: 50,
        textAlign: "left",
        paddingLeft: "20%",
        paddingRight: "20%",
    },
    mainHeader: {
        fontFamily: "Handlee",
        fontSize: 26,
    }
}));

function About() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.bannerWrapper}>
                    <div className={classes.banner}>
                        <div className={classes.content}>
                            <h2 className={classes.header}>
                                About Communitree
                        </h2>

                        </div>
                    </div>
                </div>
                <div className={classes.main}>
                    <h2 className={classes.mainHeader}>How was the idea created?</h2>
                    <p>The Communitree concept was created as a form of culture jamming. This was undertaken as a part of the ARTS1241 course at UNSW.</p>
                    <h2 className={classes.mainHeader}>What is it trying to achieve?</h2>
                    
                    <p>More to come!</p>
                </div>
            </div>
        </div>
    )
}

export default About;