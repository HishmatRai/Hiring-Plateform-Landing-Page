import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./PoweredEcosystem.css";
import HeaderImg from "./../../img/header_img.png";
import { BsCircleFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import SpecialExpatRatesIcon1 from './../../img/SpecialExpatRatesIcon1.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function PoweredEcosystem() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className="PoweredEcosystem_first_card_main">
            <p className="PoweredEcosystem_heading">An AI-Powered Ecosystem</p>
            <p className="PoweredEcosystem_des">
              The types of jobs that are currently having an increase in job
              vacancies and are very tempting both in terms of salary and also
              the experience you can get because this is a job in IT world and
              this is very young mpting both in terms of salary and the
              experience you can get because this is a job in IT world and this.
            </p>
            <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
         <div className="SpecialExpatRates_card_main">
             <div className="SpecialExpatRatesIconMain">
                 <img src={SpecialExpatRatesIcon1} className="SpecialExpatRatesIcon1" />
             </div>
             <div>
                 <p>Special expat rates</p>
                 <p>Very tempting both in terms</p>
             </div>
         </div>
        </Grid>
        <Grid item xs={12} sm={6}>
         <div className="SpecialExpatRates_card_main">
             <div className="SpecialExpatRatesIconMain">
                 <img src={SpecialExpatRatesIcon1} className="SpecialExpatRatesIcon1" />
             </div>
             <div>
                 <p>Special expat rates</p>
                 <p>Very tempting both in terms</p>
             </div>
         </div>
        </Grid>
        </Grid>
        </div>

        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
         <div className="SpecialExpatRates_card_main">
             <div className="SpecialExpatRatesIconMain">
                 <img src={SpecialExpatRatesIcon1} className="SpecialExpatRatesIcon1" />
             </div>
             <div>
                 <p>Special expat rates</p>
                 <p>Very tempting both in terms</p>
             </div>
         </div>
        </Grid>
        <Grid item xs={12} sm={6}>
         <div className="SpecialExpatRates_card_main">
             <div className="SpecialExpatRatesIconMain">
                 <img src={SpecialExpatRatesIcon1} className="SpecialExpatRatesIcon1" />
             </div>
             <div>
                 <p>Special expat rates</p>
                 <p>Very tempting both in terms</p>
             </div>
         </div>
        </Grid>
        </Grid>
        </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
    <div className="PoweredEcosystem_second_card_main"></div>
        </Grid>
      </Grid>
    </div>
  );
}
