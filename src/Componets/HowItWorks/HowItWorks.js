import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './HowItWorks.css';
import HeaderImg from './../../img/header_img.png'
import { BsCircleFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function HowItWorks() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <div className="search_Card_main">
                        <div className="search_icon_main">
                            <RiSearchLine color="white"/>
                        </div>
                        <p className="search_heaindg">Find your dream job and enter your portfolio </p>
                        <p className="search_des">Let's find opportunities for you to be successful and don't miss this golden opportunity</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="search_Card_main">
                        <div className="search_icon_main">
                            <RiSearchLine color="white"/>
                        </div>
                        <p className="search_heaindg">Find your dream job and enter your portfolio </p>
                        <p className="search_des">Let's find opportunities for you to be successful and don't miss this golden opportunity</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="search_Card_main">
                        <div className="search_icon_main">
                            <RiSearchLine color="white"/>
                        </div>
                        <p className="search_heaindg">Find your dream job and enter your portfolio </p>
                        <p className="search_des">Let's find opportunities for you to be successful and don't miss this golden opportunity</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
