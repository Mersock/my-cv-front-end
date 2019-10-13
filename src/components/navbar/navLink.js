import React, { useState, useEffect } from 'react'
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
            onChange={async (event, newValue) => {
                Router.push(newValue)
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" value="/" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Posts" value="/posts" icon={<FavoriteIcon />} />

        </BottomNavigation>
    )
}

export default navLink
