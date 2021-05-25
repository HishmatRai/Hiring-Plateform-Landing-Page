import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Footer.css";
import Logo from "./../../img/logo.png";
import { BsCircleFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
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

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <div>
            <img src={Logo} className="Logo" />
            <p className="footer_heading">
              Funding freemium long tail hypotheses first mover advantage assets
              ownership
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div>
            <p className="footer_heading2">Features</p>
            <p className="footer_pages_list">Online Apply</p>
            <p className="footer_pages_list">Checking</p>
            <p className="footer_pages_list">Video Reference</p>
            <p className="footer_pages_list">Join Comunity</p>
            <p className="footer_pages_list">Nearby Jobs</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div>
            <p className="footer_heading2">About us</p>
            <p className="footer_pages_list">Who we are</p>
            <p className="footer_pages_list">Privacy policy</p>
            <p className="footer_pages_list">Tearms & Conditions</p>
            <p className="footer_pages_list">FAQ</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div>
            <p className="footer_heading2">Contact</p>
            <p className="footer_pages_list">+199 1031 48810</p>
            <p className="footer_pages_list">hello@gawe.com</p>
            <p className="footer_pages_list">Sukabumi, Jawa barat</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
