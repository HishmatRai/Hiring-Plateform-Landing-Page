import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Header.css';
import HeaderImg from './../../img/header_img.png'
import { BsCircleFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
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

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} >
                    <div>
                        <p className="heading">We are helping you</p>
                        <p className="heading2">Where Talent <br />Meets Technology</p>
                        <p className="sub_heading">Let's find opportunities for you to be successful and don't miss this golden</p>
                        <p className="sub_heading">opportunity for a better future, and be proud of your family</p>
                        <button className="view_demo_btn">VIEW DEMO</button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <div className="header_card_second_Section">
                        <img src={HeaderImg} className="HeaderImg" />
                        <div className="Live_show_main">
                            <p className="live_heading">Live <BsCircleFill /></p>
                            <p className="live_Des">Gain extensive connections and opportunities for success</p>
                            <div className="live_total_counter_main">
                                <div className="all_circles">
                                    <div className="empty_circle"></div>
                                    <div className="empty_circle"></div>
                                    <div className="empty_circle"></div>
                                    <div className="counter_circle">
                                        10+
                                </div>
                                </div>
                                <button className="join_now_btn">
                                    Join now
                                <BsArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
