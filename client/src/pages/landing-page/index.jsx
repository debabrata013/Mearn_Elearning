import React, { useState, useEffect } from "react";
import SkillDevelopment from './skilldev/SkillDevelopment';
import LandingSection from './Hero/hero';
import Achievements from './Achievements/achievement';
import Mentors from './Mentors/mentors';
import Appi from './All-learning/AI';
import CollaborationsAndFooter from './footer/footer';
import PopularCourses from './popular_courses/courses';
import Collaborators from './collaborators/collab';
import { useNavigate } from "react-router-dom";
import "./App.css";
import CertificateSection from "./CertificateSection/CertificateSection";
import Nav from "./nav-bar/nav";
import images from "./images/blur-image.png";

// Ripple effect component
const RippleBackground = () => (
  <div className="ripple-background">
    <div className="circle xxlarge shade1"></div>
    <div className="circle xlarge shade2"></div>
    <div className="circle large shade3"></div>
    <div className="circle medium shade4"></div>
    <div className="circle small shade5"></div>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="app-container">
      <img className="top-image"src={images} alt="bete" />
      {/* Ripple effect */}
      <RippleBackground />
      
      <Nav />
      
      {/* Main Content */}
      <div className="main-content">
        <section className="landing section">
          <LandingSection />
        </section>
        <section>
          <Collaborators />
        </section>
        <section className="ai-section section">
          <Appi />
        </section>
        <section className="skilldev section">
          <SkillDevelopment />
        </section>
        <section className="courses-section section">
          <PopularCourses />
        </section>
        <section className="achievement-section">
          <Achievements />
        </section>
        <section className="mentors-section section">
          <Mentors />
        </section>
        <section className="certification-section">
          <CertificateSection />
        </section>
      </div>

      {/* Footer and Collaborations Section */}
      <section className="footer-section">
        <CollaborationsAndFooter />
      </section>
    </div>
  );
};

export default App;
