import { makeStyles, MenuItem, MenuList } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 80,
        position: "absolute",
        textAlign: "center",
        // top: 0,
        // left: 0,
        left: 70,
        top: 80,
        borderRight: "solid 1px #549876"
    },
    active: {
        color: theme.palette.primary.main,
    },
    fixed: {
        position: "fixed",
        top: "20vh",
        left: 70
    }
}));

export default function Menu() {
    const classes = useStyles();

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        console.log(position)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${classes.root} ${scrollPosition > 1180 && classes.fixed}`}>

            <MenuList>
                <Link activeClass={classes.active} to="stepOne" spy={true} duration={500} smooth={true}>
                    <MenuItem>Step 1</MenuItem>
                </Link>
                <Link activeClass={classes.active} to="stepTwo" spy={true} duration={500} smooth={true}>
                    <MenuItem>Step 2</MenuItem>
                </Link>
                <Link activeClass={classes.active} to="stepThree" spy={true} duration={500} smooth={true}>
                    <MenuItem>Step 3</MenuItem>
                </Link>
                <Link activeClass={classes.active} to="stepFour" spy={true} duration={500} smooth={true}>
                    <MenuItem>Step 4</MenuItem>
                </Link>
                <Link activeClass={classes.active} to="stepFive" spy={true} duration={500} smooth={true} >
                    <MenuItem>Step 5</MenuItem>
                </Link>
                <Link activeClass={classes.active} to="stepSix" spy={true} duration={500} smooth={true}>
                    <MenuItem>Step 6</MenuItem>
                </Link>
                {/* <Link activeClass={classes.active} to="stepSeven" spy={true} duration={500} smooth={true}>
                    <MenuItem>Step 7</MenuItem>
                </Link>
                <Link activeClass={classes.active} to="stepEight" spy={true} duration={500} smooth={true}>
                    <MenuItem>Step 8</MenuItem>
                </Link>
                <Link activeClass={classes.active} to="stepNine" spy={true} duration={500} smooth={true}>
                    <MenuItem>Step 9</MenuItem> */}
                {/* </Link> */}
            </MenuList>

        </div>
    )
}