import React from "react";
import Navbar from "./../../Componets/Navbar/Navbar";
import Heading from "./../../Componets/Header/Header";
import CompanyHireWithUs from "./../../Componets/CompanyHireWithUs/CompanyHireWithUs";
import "./Home.css";
import HowItWorks from "./../../Componets/HowItWorks/HowItWorks";
import WhyChooseOppty from "./../../Componets/WhyChooseOppty/WhyChooseOppty";
import PoweredEcosystem from "./../../Componets/PoweredEcosystem/PoweredEcosystem";
import BestPartnerinLocation from "./../../Componets/BestPartnerinLocation/BestPartnerinLocation";
import OurBlog from "./../../Componets/OurBlog/OurBlog";
import Footer from "./../../Componets/Footer/Footer";
const Home = (props) => {
  return (
    <div>
      <div className="top_main">
        <Navbar history={props.history}/>
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
        <p className="HowItWorks_des">
          how this application works to help you in finding a job, let's learn
          and feel <br />
          the benefits for the convenience of your life
        </p>
        <HowItWorks />
      </div>

      {/* -----------------------------> WhyChooseOppty <------------------------- */}
      <div className="WhyChooseOppty_main">
        <div className="WhyChooseOppty_header_main">
          <p className="WhyChooseOppty_heading">Why Choose Oppty?</p>
          <p className="WhyChooseOppty_Des">
            Find your favourite jobs and gets the benefits <br />
            for yourself
          </p>
        </div>
        <WhyChooseOppty />
      </div>

      {/* -----------------------------> PoweredEcosystem <------------------------- */}
      <div className="PoweredEcosystem_main">
        <PoweredEcosystem />
      </div>

      {/* -----------------------------> BestPartnerinLocation <------------------------- */}
      <div className="BestPartnerinLocation_main">
        <BestPartnerinLocation />
      </div>
      {/* -----------------------------> OurBlog <------------------------- */}
      <div className="OurBlog_main">
        <p className="OurBlog_heading">Our blog for find reference insight</p>
        <OurBlog />
        <button className="OurBlog_view_all_btn">View All</button>
      </div>

      {/* -----------------------------> Get Started Now <------------------------- */}
      <div className="GetStarted_main">
        <p className="GetStarted_heading">Get Started Now</p>
        <p className="GetStarted_des">
          let's join now and have a pleasant experience with us and also very
          satisfying <br />
          results for the body and mind, fresh and muscular
        </p>
        <div className="GetStarted_buttons_main">
          <button className="GetStarted_Btn">Get Started</button>
          <button className="GetStarted_read_more_Btn">Read More</button>
        </div>
      </div>

      {/* -----------------------------> Footer <------------------------- */}
      <div className="Footer_main">
        <div className="Footer_main_show">
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default Home;
