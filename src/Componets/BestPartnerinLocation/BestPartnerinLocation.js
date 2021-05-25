import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./BestPartnerinLocation.css";
import BestPartnerinLocationImg from "./../../img/BestPartnerinLocationImg.png";
import { BsCircleFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import PowerCompanyIcon from "./../../img/PowerCompanyIcon.png";
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

export default function BestPartnerinLocation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <div>
            <img
              src={BestPartnerinLocationImg}
              className="BestPartnerinLocationImg"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={5}>
          <div className="BestPartnerinLocationCard_main">
            <p className="BestPartnerinLocation_heading">
              The best partner in each location and make it easier for you to
              find it
            </p>
            <div className="PowerCompany_Card_main">
              <img src={PowerCompanyIcon} className="PowerCompanyIcon" />
              <div className="PowerCompany_Card_data">
                <p className="PowerCompany_Card_heading">Power Company</p>
                <p className="PowerCompany_Card_des">
                  9 Jobs available work for the positon
                </p>
              </div>
            </div>
            <div className="PowerCompany_Card_main">
              <img src={PowerCompanyIcon} className="PowerCompanyIcon" />
              <div className="PowerCompany_Card_data">
                <p className="PowerCompany_Card_heading">Power Company</p>
                <p className="PowerCompany_Card_des">
                  9 Jobs available work for the positon
                </p>
              </div>
            </div>
            <div className="PowerCompany_Card_main">
              <img src={PowerCompanyIcon} className="PowerCompanyIcon" />
              <div className="PowerCompany_Card_data">
                <p className="PowerCompany_Card_heading">Power Company</p>
                <p className="PowerCompany_Card_des">
                  9 Jobs available work for the positon
                </p>
              </div>
            </div>
          </div>
          <button className="BestPartnerinLocation_view_all_btn">View All</button>
        </Grid>
        
      </Grid>
     
    </div>
  );
}
