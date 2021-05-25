import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './OurBlog.css';
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

export default function OurBlog() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <div className="OurBlog_Card_main">
                        <div className="OurBlog_Card_Img"></div>
                        <p className="OurBlog_Card_heaindg">How to become UX Designer</p>
                        <p className="OurBlog_Card_des">Simple step for become ux designer with...</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="OurBlog_Card_main">
                        <div className="OurBlog_Card_Img"></div>
                        <p className="OurBlog_Card_heaindg">How to become UX Designer</p>
                        <p className="OurBlog_Card_des">Simple step for become ux designer with...</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="OurBlog_Card_main">
                        <div className="OurBlog_Card_Img"></div>
                        <p className="OurBlog_Card_heaindg">How to become UX Designer</p>
                        <p className="OurBlog_Card_des">Simple step for become ux designer with...</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
