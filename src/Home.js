import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import tree from './images/tree_background.jpg';
import { Link } from 'react-scroll';
import Menu from './Menu';
import tree_logo from './images/logo_tree_only.png';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
    },
    banner: {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${tree})`,
        height: 300,
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
    steps: {

        textAlign: "left",
        fontSize: 20,
        position: "relative",
        lineHeight: 1.5,
    },
    content: {
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    step: {
        paddingTop: 40,
    },
    stepHeader: {
        fontFamily: "Handlee",
        fontSize: 26,
        marginTop: 0,
    },
    mainHeader: {
        // fonts
        // textAlign: "center",
        textAlign: "left",
        marginTop: 50,
        // marginBottom: -30,
        // textDecoration: "underline",
        textDecorationColor: theme.palette.secondary.main,
    },
    text: {
        float: "left",
        width: "calc(100% - 150px)",
        textAlign: "justify",
        paddingRight: 10,
    },
    space: {
        marginTop: 80,
        textAlign: "center",
    },
    video: {
        width: "60%",
        // marginTop: ,
        marginLeft: "auto",
        marginRight: "auto"
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.bannerWrapper}>
                <div className={classes.banner}>
                    <div>
                        <h2 className={classes.header}>
                            Build a Communitree in your community
                        </h2>
                        <Link to="start" spy={true} duration={500} smooth={true}>
                            <Button variant="contained" color="primary">Get started</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={classes.video}>
                <h1 className={classes.mainHeader}>Communitree Video</h1>
                <iframe title="communitree" width="100%" height="500" src="https://www.youtube.com/embed/ScO3i1QXR4I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className={classes.steps}>
                <Menu />
                <div className={classes.content}>
                    <h1 className={classes.mainHeader} id="start">How to Build your Communitree</h1>
                    <div className={classes.step} id="stepOne">
                        <h2 className={classes.stepHeader}>
                            Step 1: Find some friends
                    </h2>
                        <p><b>Communitrees are about community.</b> The very exercise of planning and building a Communitree can be transformative and foster greater connectivity. Have a think about who could help you to initiate your Communitree!</p>


                    </div>
                    <div className={classes.step} id="stepTwo">
                        <h2 className={classes.stepHeader}>
                            Step 2: Find your Communitree
                    </h2>
                        <p>Find a tree which you and others in your community can access easily and connect with. Trees in central areas with low hanging branches are most accessible and easy to decorate. A nearby bench is also desirable so that people can sit under the tree and connect with one another.</p>
                    </div>
                    <div className={classes.step} id="stepThree">
                        <h2 className={classes.stepHeader}>
                            Step 3: Preparation
                    </h2>
                        <p>Gather materials, make the community noticeboard and bring your ideas to life! Ideally, all materials should be recycled or second-hand and resistant to the wind and rain. Ask around your community to see what people have lying around!</p>

                        <p>Get creative when making your Communitree noticeboard - a place for local notices, events, groups and information about your Communitree. Customise the board to fit with the goals and values of your Communitree. Templates can be found here.</p>

                        <p>Use your networks and community strengths when creating the initial components for your tree.  Do you have a carpenter friend who could make a bird box? Know any aspiring artists to try some banner painting? How could you engage the community to co-create the decorations?
                    </p>
                    </div>
                    <div className={classes.step} id="stepFour">
                        <h2 className={classes.stepHeader}>
                            Step 4: Setup your online community
                    </h2>
                        <p>An online platform helps your Communitree reach more people and stay accessible. Create a Facebook page or email group to keep people up to date, connected and involved in the growth of your Commmunitree!</p>
                    </div>
                    <div className={classes.step} id="stepFive">
                        <h2 className={classes.stepHeader}>
                            Step 5: Build your tree!
                    </h2>
                        <p>Organise an opening event with friends and community members to add all the elements to the tree. The tree will evolve over time (that’s the whole point!) so you don’t need to fill it up but adding some initial decorations and the noticeboard are a great way to get more people involved?</p>
                    </div>
                    <div className={classes.step} id="stepSix">
                        <h2 className={classes.stepHeader}>
                            Step 6: Watch it grow
                    </h2>
                        <p>The Communitree is an ever-evolving project which will continue to change and develop in accordance with the values and wishes of your community. Empower local members to take an active role in updating the Communitree noticeboard and growing the community.</p>
                    </div>
                    <div className={classes.space}>
                        <img src={tree_logo} alt="Communitree logo" />
                    </div>
                    <p className={classes.steps}>
                        <b>Disclaimer:</b> Please do not harm the tree in any way by using a hammer and nails, ripping branches, tearing leaves or applying any permanent materials (eg paint). Treat the tree as you would treat your loved ones… with respect, dignity and care.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;