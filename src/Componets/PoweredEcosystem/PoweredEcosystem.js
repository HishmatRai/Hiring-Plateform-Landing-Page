import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./PoweredEcosystem.css";
import SpecialExpatRatesIcon1 from './../../img/SpecialExpatRatesIcon1.png';
import DollersIcon from './../../img/dollersIcon.png';
import WatchIcon from './../../img/watchIcon.png';
import Nopapework from './../../img/Nopapework.png'
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
                      <p className="SpecialExpatRateHeading">Special expat rates</p>
                      <p className="SpecialExpatRateSubHeading">Very tempting both in terms</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="SpecialExpatRates_card_main">
                    <div className="SpecialExpatRatesIconMain">
                      <img src={DollersIcon} className="SpecialExpatRatesIcon1" />
                    </div>
                    <div>
                      <p className="SpecialExpatRateHeading">Work life Balance</p>
                      <p className="SpecialExpatRateSubHeading">Very tempting both in terms</p>
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
                      <img src={WatchIcon} className="SpecialExpatRatesIcon1" />
                    </div>
                    <div>
                      <p className="SpecialExpatRateHeading">24/7 Coustemer Services</p>
                      <p className="SpecialExpatRateSubHeading">Very tempting both in terms</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="SpecialExpatRates_card_main">
                    <div className="SpecialExpatRatesIconMain">
                      <img src={Nopapework} className="SpecialExpatRatesIcon1" />
                    </div>
                    <div>
                      <p className="SpecialExpatRateHeading">No papework</p>
                      <p className="SpecialExpatRateSubHeading">Very tempting both in terms</p>
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
