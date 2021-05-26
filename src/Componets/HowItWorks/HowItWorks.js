import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './HowItWorks.css';
import { RiSearchLine } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

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
                            <RiSearchLine color="white" />
                        </div>
                        <p className="search_heaindg">Find your dream job and enter your portfolio </p>
                        <p className="search_des">Let's find opportunities for you to be successful and don't miss this golden opportunity</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="search_Card_main">
                        <div className="search_icon_main2">
                            <MdKeyboardVoice color="#FF7A00" />
                        </div>
                        <p className="search_heaindg">Job interview and recruitment process</p>
                        <p className="search_des">job interviews and ability testing, physical health and psychological checks of prospective employees</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="search_Card_main">
                        <div className="search_icon_main2">
                            <IoIosCheckmarkCircleOutline color="#FF7A00" />
                        </div>
                        <p className="search_heaindg">Completion of files and work internships</p>
                        <p className="search_des">complete file collection and job training to suit the work environment</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
