import React, { useState, useEffect } from 'react'
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';

const navLink = (props) => {
    const { pathname } = props;
    const [value, setValue] = useState(null);
    useEffect(() => {
        setValue(pathname)
    })

    const useStyles = makeStyles({
        root: {
            width: "100%",
        }
    });
    const classes = useStyles();

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                Router.push(newValue)
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" value="/" icon={<RestoreIcon />} />
            <BottomNavigationAction label="About" value="/about" icon={<RestoreIcon />} />
        </BottomNavigation>
    )
}

export default navLink
