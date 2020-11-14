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
        fontSize: 18,
        lineHeight: 1.5,
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
                    <h2 className={classes.mainHeader}>What is a Communitree?</h2>
                    <p>Communitrees are colourful decorated trees in central community locations which aim to foster a greater sense of community within an outdoor space.  They are ever-evolving spaces which the local community is encouraged to add to and adapt to suit their needs.</p>

                    <h2 className={classes.mainHeader}>What do Communitrees help to achieve?</h2>
                    <p>Communitrees are places that foster community-building through the appreciation of the natural world in which we all live. Communitrees can help to create: </p>
                    <ul>
                        <li>
                            An outdoor space for community interactions through events or spontaneous conversations,
                        </li>
                        <li>
                            A greater sense of gratitude for the local environment and community,
                        </li>
                        <li>
                            A space for community notices, spreading the word about great sustainable and/or community-building events locally,
                        </li>
                        <li>
                            Solidarity between different groups and movements,
                        </li>
                        <li>
                            A space that encourages more eco-friendly behaviours, recognising the importance of individual and community actions in creating systemic change.
                        </li>
                    </ul>

                    <h2 className={classes.mainHeader}>What is ecocultural jamming?</h2>
                    <p>
                        Ecocultural jamming is the act of resisting the view that humans are higher than other living things on the planet, otherwise coined as the dominant anthropocentric ideology, and moving toward re-creating new ways of relating to our environment where all living things are equal i.e. an ecocentric worldview where living beings are in interrelation with one another.
                    </p>
                    <p>Ecocultural jamming has four theorised channels by which it works:</p>
                    <ol>
                        <li>
                            It invites people to participate in resistant, alternate cultural production.
                        </li>
                        <li>
                            It engages people corporeally, that is, people learn experientially through their body and senses.
                        </li>
                        <li>
                            It fosters a poetic community politic, that is, not only creating the alternate ecoculture together, but sharing it with others with the notion of a ‘we’ in community. This is a ‘we’ that is interrelated through our shared presence on the planet, which we hope to enunciate through the ecoculture jam.
                        </li>
                        <li>
                            Lastly, it creates a turning point where the learner feels that they have shifted their perspective in the transitional space of play, creativity and shared cultural production in our ecocultural jam
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default About;