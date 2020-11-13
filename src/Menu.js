import { makeStyles, MenuItem, MenuList } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { SectionsSpy } from 'react-smart-sections';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 80,
        position: "absolute",
        textAlign: "center",
        // top: 0,
        // left: 0,
        left: `calc(-1 * (20% + 11px))`,
        top: 80,
        borderRight: "solid 1px #549876"
    },
    active: {
        color: theme.palette.primary.main,
    },
    fixed: {
        position: "fixed",
        top: "20vh",
        left: `calc(10% - 40px)`
    }
}));

export default function Menu() {
    const classes = useStyles();

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <SectionsSpy render={sections => (
            <div className={`${classes.root} ${scrollPosition > 530 && classes.fixed}`}>

                <MenuList>
                    <Link activeClass={classes.active} to="stepOne" spy={true} duration={500} smooth={true} offset={-50}>
                        <MenuItem>Step 1</MenuItem>
                    </Link>
                    <Link activeClass={classes.active} to="stepTwo" spy={true} duration={500} smooth={true} offset={-50}>
                        <MenuItem>Step 2</MenuItem>
                    </Link>
                    <Link activeClass={classes.active} to="stepThree" spy={true} duration={500} smooth={true} offset={-50}>
                        <MenuItem>Step 3</MenuItem>
                    </Link>
                    <Link activeClass={classes.active} to="stepFour" spy={true} duration={500} smooth={true} offset={-50}>
                        <MenuItem>Step 4</MenuItem>
                    </Link>
                    <Link activeClass={classes.active} to="stepFive" spy={true} duration={500} smooth={true} offset={-50}>
                        <MenuItem>Step 5</MenuItem>
                    </Link>
                    <Link activeClass={classes.active} to="stepSix" spy={true} duration={500} smooth={true} offset={-50}>
                        <MenuItem>Step 6</MenuItem>
                    </Link>
                </MenuList>

            </div>
        )} />
    )
}