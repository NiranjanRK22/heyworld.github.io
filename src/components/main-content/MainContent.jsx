import React from "react";
import "./MainContent.css";
import WhoCanJoinSection from "../who-can-join-section/WhoCanJoinSection";
import HowItWorks from "../how-it-works/HowItWorks";
import PopularCourses from "../popular-courses/PopularCourses";
import Testimonial from "../testimonial/Testimonial";

function MainContent() {
  const testimonials = [
    {
      text: "The foundational features of Sketch have been indispensable.",
      name: "Jasper Hauser",
      title: "Darkroom",
    },
    {
      text: "Another great testimonial.",
      name: "John Doe",
      title: "Company XYZ",
    },
    // Add more testimonials here
  ];

  return (
    <>
      <div className="container">
        <div className="first-main-content">
          <h2 className="main-title">Skill your way up to success with us</h2>
          <p className="main-desc">
            Get the skills you need for the future of work.
          </p>
        </div>
        <div>
          <img
            src="./home-image3.png"
            alt="Skill up"
            width={500}
            height={380}
          />
        </div>
      </div>
      <WhoCanJoinSection />
      <HowItWorks />
      <PopularCourses />
      <Testimonial testimonials={testimonials} />
    </>
  );
}

export default MainContent;
