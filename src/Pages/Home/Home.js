import React from "react";
import Navbar from './../../Componets/Navbar/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Heading from './../../Componets/Header/Header';
import CompanyHireWithUs from './../../Componets/CompanyHireWithUs/CompanyHireWithUs'
import './Home.css'
import HowItWorks from './../../Componets/HowItWorks/HowItWorks'
const Home = (props) => {

    return (
        <div>
            <div className="top_main">
                {/* -----------------------------> Heading <------------------------- */}
                <div className="Heading_main">
                    <Heading />
                </div>
            </div>
            {/* -----------------------------> CompanyHireWithUs <------------------------- */}
            <div className="CompanyHireWithUs_main">
                <p className="CompanyHireWithUs_heading">Company Hire With Us</p>
                <CompanyHireWithUs />
            </div>

            {/* -----------------------------> HowItWorks <------------------------- */}
            <div className="HowItWorks_main">
                <p className="HowItWorks_heading">How It Works</p>
                <p className="HowItWorks_des">how this application works to help you in finding a job, let's learn and feel <br/>the benefits for the convenience of your life</p>
                <HowItWorks />
            </div>
        </div>
    );
};

export default Home;