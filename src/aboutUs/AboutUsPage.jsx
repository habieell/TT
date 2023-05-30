import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import logo from "./Logo.jpeg";
import "./AboutUs.css";

function AboutUsPage({ toggleNavbar }) {
  const navigate = useNavigate();

  return (
    <div className="about-us-page">
      <AboutUs />
    </div>
  );
}

export default AboutUsPage;
