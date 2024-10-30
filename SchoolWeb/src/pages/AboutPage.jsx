import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import HeroAbout from "../component/HeroAbout";
import HomepageFooter from "../component/HomepageFooter";


const AboutPage = () => {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 1000); // Display welcome screen for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div>
      {showWelcomeScreen ? (
        <div className="flex items-center justify-center h-screen bg-black animate-fadeOut">
          <h1 className="text-white text-8xl  italic  font-bold animate-bounce">            Welcome to My Campus <span className="text-red-500">Beauty !</span>
          </h1>
        </div>
      ) : ( 
        <div>
          <Navbar/>
          <div className="bg-gray-200">
          <HeroAbout/>
          <HomepageFooter/>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
