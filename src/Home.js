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
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "left",
        fontSize: 20,
        position: "relative",
        lineHeight: 1.5,
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
        marginTop: 80,
        marginBottom: -30,
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
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.bannerWrapper}>
                <div className={classes.banner}>
                    <div className={classes.content}>
                        <h2 className={classes.header}>
                            Build a Communitree in your community
                        </h2>
                        <Link to="start" spy={true} duration={500} smooth={true}>
                            <Button variant="contained" color="primary">Get started</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={classes.steps}>
                <Menu />
                <h1 className={classes.mainHeader} id="start">How to Build your Communitree</h1>
                <div className={classes.step} id="stepOne">
                    <h2 className={classes.stepHeader}>
                        Step 1: Find some friends
                    </h2>
                    <p><b>Communitrees are about community.</b> The very exercise of planning and building a Communitree can be transformative and foster greater connectivity. Have a think about who could help you to initiate your Communitree!</p>
                    

                </div>
                <div className={classes.step} id="stepTwo">
                    <h2 className={classes.stepHeader}>
                        Step 2: Decide the main focus for your Communitree
                    </h2>
                    <p>What is the main message you want people to come away with? Decide on any activities and messages/artwork you wish to display on the tree.</p>
                    <p>Here are some ideas to get you started:</p>
                    <ul>
                        <li>Help people make connections within your community</li>
                        <li>Bring joy and appreciation to passerbys</li>
                        <li>Create a meeting place for your community</li>
                        <li>Reconnect the people in your community back to nature</li>
                    </ul>
                </div>
                <div className={classes.step} id="stepThree">
                    <h2 className={classes.stepHeader}>
                        Step 3: Find your Communitree
                    </h2>
                    <p>This should be in a public place that people pass by often. Try to find trees with low hanging branches that are easily accessible by all community members. A nearby bench is also desirable so that people can sit under the tree and connect with one another. </p>
                </div>
                <div className={classes.step} id="stepFour">
                    <h2 className={classes.stepHeader}>
                        Step 4: Gather materials
                    </h2>
                    <p>Gather all the materials required to make your ideas come to life! Try finding materials resistant to the rain and wind. </p>
                    <p>Examples of materials that could be used:</p>
                    <ul>
                        <li>Fabric</li>
                        <li>Paint</li>
                        <li>Wood</li>
                        <li>Rope</li>
                        <li>Frames</li>
                        <li>Black boards</li>
                        <li>Bird feeders</li>
                        <li>Canvases</li>
                    </ul>
                    <p>Ask around the community to see what people might already have around the house. Other things can be sourced from op shops and local stores… try not to buy anything new!</p>
                </div>
                <div className={classes.step} id="stepFive">
                    <h2 className={classes.stepHeader}>
                        Step 5: Create the components
                    </h2>
                    <p>Utilise your strengths! Do you have a carpenter friend who could make a bird box? Know any aspiring artists to try some banner painting?</p>
                </div>
                <div className={classes.step} id="stepSix">
                    <h2 className={classes.stepHeader}>
                        Step 6: Make the noticeboard
                    </h2>
                    <p>The Communitree noticeboard is a place for local notices, events, groups and information about your Communitree. Customise this to fit with the goals and values of your Communitree. Templates can be found here. </p>
                    <p>Get creative when making the board! Local notices can be found at community centres or libraries. Have a look on your local council website as well. If possible, talk to people in the community and ask what issues are affecting them most.</p>
                </div>
                <div className={classes.step} id="stepSeven">
                    <h2 className={classes.stepHeader}>
                        Step 7: Setup your online community
                    </h2>
                    <p>An online platform helps your Communitree reach more people and stay accessible. Create a Facebook page or email group to keep people up to date, connected and involved in the growth of your Commmunitree!</p>

                </div>
                <div className={classes.step} id="stepEight">
                    <h2 className={classes.stepHeader}>
                        Step 8: Build your tree!
                    </h2>
                    <p>Gather as many friends as possible and add all the elements to the tree. This can be done in a day or over time. A cool idea is to have an opening event where community members can make art and contribute to the Communitree from the get go.</p>


                </div>
                <div className={classes.step} id="stepNine">
                    <h2 className={classes.stepHeader}>
                        Step 9: Watch it grow
                    </h2>
                    <p>The Communitree is an ever-evolving project which will continue to change and develop in accordance with the values and wishes of your community. Empower local members to take an active role in updating the Communitree noticeboard and growing the community.</p>

                </div>
            </div>
            <div className={classes.space}>
                <img src={tree_logo} alt="Communitree logo" />
            </div>
            <p className={classes.steps}>
                <b>Disclaimer:</b> Please do not harm the tree in any way by using a hammer and nails, ripping branches, tearing leaves or applying any permanent materials (eg paint). Treat the tree as you would treat your loved ones… with respect, dignity and care.
                    </p>

        </div>
    )
}

export default Home;