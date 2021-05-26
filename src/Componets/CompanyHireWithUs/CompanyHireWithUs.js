import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './CompanyHireWithUs.css';
import Papatonq from './../../img/Papatonq.png';
import Gologolo from './../../img/Gologolo.png';
import Tokopepes from './../../img/Tokopepes.png';
import Gorgom from './../../img/Gorgom.png';
import Circle from './../../img/Circle.png'
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

export default function CompanyHireWithUs() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={1}></Grid>
                <Grid item xs={12} sm={2}>
                    <div className="Papatonq_main">
                        <img src={Papatonq} className="Papatonq_img" />
                        <div>
                            <span className="Papatonq_heading">Papatonq</span><br />
                            <span className="Papatonq_des">The Building Future</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div className="Gologolo_main">
                        <img src={Gologolo} className="Gologolo_img" />
                        <p className="Gologolo_heading">Gologolo.inc</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div className="Tokopepes_main">
                        <img src={Tokopepes} className="Tokopepes_img" /><br />
                        <span className="Tokopepes_heading">Tokopepes</span>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div className="Gorgom_main">
                        <img src={Gorgom} className="Gorgom_img" />
                        <div>
                            <span className="Gorgom_heading">Gorgom Style</span><br />
                            <span className="Gorgom_des">Styile is number one <br />in the world</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div className="Circle_main">
                        <img src={Circle} className="Circle_img" />
                        <p className="Circle_heading">Circle</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={1}></Grid>
            </Grid>
        </div>
    );
}
