import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './WhyChooseOppty.css';
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

export default function WhyChooseOppty() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <div className="WhyChooseOppty_Card_main">
                        <div className="numbering_counter_main">
                            <p className="numbering_counter_show">1</p>
                        </div>
                        <p className="WhyChooseOppty_heaindg">Build a professional <br />Programmer</p>
                        <p className="WhyChooseOppty_des">We Always help your business <br />for growth up as soon <br />possible</p>
                        <button className="learn_more_btn">LEARN MORE <BsArrowRight /></button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="WhyChooseOppty_Card_main">
                        <div className="numbering_counter_main">
                            <p className="numbering_counter_show">2</p>
                        </div>
                        <p className="WhyChooseOppty_heaindg">Easily apply for every <br />jobs</p>
                        <p className="WhyChooseOppty_des">Be creative by making a business <br />to make it soft</p>
                        <button className="learn_more_btn2">LEARN MORE <BsArrowRight /></button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="WhyChooseOppty_Card_main">
                        <div className="numbering_counter_main">
                            <p className="numbering_counter_show">3</p>
                        </div>
                        <p className="WhyChooseOppty_heaindg">Improve Creative <br />Perfomance</p>
                        <p className="WhyChooseOppty_des">Monitor your business for <br />perfomance better than</p>
                        <button className="learn_more_btn2">LEARN MORE <BsArrowRight /></button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
