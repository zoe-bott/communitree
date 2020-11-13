import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import tree from './images/tree_background.jpg';
import { Section } from 'react-smart-sections';
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
    },
    step: {
        paddingTop: 70,
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
                <Section className={classes.step} name="stepOne" id="stepOne">
                    <h2 className={classes.stepHeader}>
                        Step 1: Decide the main focus for your Communitree
                    </h2>
                    <p>What is the main message you want people to come away with? Decide on any activities and messages/artwork you wish to display on the tree.</p>
                    <p>Here are some ideas to get you started:</p>
                    <ul>
                        <li>Help people make connections within your community</li>
                        <li>Bring joy and appreciation to passerbys</li>
                        <li>Create a meeting place for your community</li>
                        <li>Reconnect the people in your community back to nature</li>
                    </ul>
                </Section>
                <Section className={classes.step} name="stepTwo" id="stepTwo">
                    <h2 className={classes.stepHeader}>
                        Step 2: Find your Communitree
                    </h2>
                    <p>This should be in a public place that people pass by often. Try finding trees with low hanging branches that are easily accessible.</p>
                </Section>
                <Section className={classes.step} name="stepThree" id="stepThree">
                    <h2 className={classes.stepHeader}>
                        Step 3: Gather materials
                    </h2>
                    <p>Gather all the materials required to make your ideas come to life! We would recommend materials resistant to rain and wind.</p>
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
                    <p>Ask around the community to see what people might already have around the house. Other things can be sourced from op shops and local stores.</p>
                </Section>
                <Section className={classes.step} name="stepFour" id="stepFour">
                    <h2 className={classes.stepHeader}>
                        Step 4: Discover local notices and issues
                    </h2>
                    <p>Local notices can be found at community centres or libraries. Have a look on your local council website as well. </p>
                    <p>If possible, try talking to people in the community and ask what issues are affecting them 	most at the moment. </p>
                </Section>
                <Section className={classes.step} name="stepFive" id="stepFive">
                    <h2 className={classes.stepHeader}>
                        Step 5: Design and create
                    </h2>
                    <p>Utilise your strengths! Do you have a carpenter friend who could make a bird box? Know any aspiring artists to try some banner painting?</p>
                    <p>Use frames and paper to display any notices and information gathered from step 4.</p>
                </Section>
                <Section className={classes.step} name="stepSix" id="stepSix">
                    <h2 className={classes.stepHeader}>
                        Step 6: Build your tree!
                    </h2>
                    <p>Gather as many people as possible and add all the elements to the tree. This can be done in a day or over time.</p>
                    <p>Disclaimer: Do not harm the tree in any way by using a hammer and nails, ripping branches or tearing leaves. Where possible, also try to prevent rubbish.</p>
                </Section>
            </div>
            <div className={classes.space}>
                <img src={tree_logo} />
            </div>

        </div>
    )
}

export default Home;