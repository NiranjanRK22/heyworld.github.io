import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./PopularCourses.css";
import { useNavigate } from "react-router-dom";
import enrollIcon from "../../assets/svg/enrollicon.svg";

const popularCourses = [
  {
    id: 1,
    imgSrc: "./HTMLCSS.png",
    title: "HTML and CSS",
    description:
      "Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS",
  },
  {
    id: 2,
    imgSrc: "./javascript.png",
    title: "JavaScript",
    description:
      "Learn JavaScript with examples and tutorials to build dynamic and interactive web applications.",
  },
  {
    id: 3,
    imgSrc: "./reactjs.png",
    title: "React JS",
    description:
      "Master React JS and build modern web applications with reusable components and state management.",
  },
  {
    id: 4,
    imgSrc: "./java.png",
    title: "Java",
    description:
      "Learn Java programming with examples and tutorials to build powerful and scalable applications.",
  },
  {
    id: 5,
    imgSrc: "./python.png",
    title: "Python",
    description:
      "Learn Python programming with examples and tutorials to build web apps, data analysis tools.",
  },
  {
    id: 6,
    imgSrc: "./c-sharp.png",
    title: "C#",
    description:
      "Master C# programming and build powerful desktop and web applications with object-oriented principles.",
  },
  {
    id: 7,
    imgSrc: "./angularjs.png",
    title: "Angular JS",
    description:
      "Learn Angular and build modern, dynamic, single-page applications using components and directives.",
  },
  {
    id: 8,
    imgSrc: "https://cutecdn.codingdojo.com/svg_images/curriculum/new_icon.svg",
    title: ".NET Core",
    description:
      "Master .NET Core framework to build cross-platform, high-performance web applications with C# and ASP.NET.",
  },
];

function PopularCourses() {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log({ name, email, mobileNumber });
    setOpenFirst(false);
    setOpenSecond(true);
  };

  const handleOpenModal = (course) => {
    setSelectedCourse(course); // Set the selected course
    setOpenFirst(true); // Open the first modal
  };

  const handleCloseSecondModal = () => {
    setOpenSecond(false); // Close the second modal
  };

  const handleViewAllCourses = () => {
    navigate("/courses");
  };

  return (
    <div className="popular-courses-container">
      <h2 className="popular-courses-title">
        Popular <span className="courses-title-text">Courses</span>
      </h2>
      <div className="popular-courses-wrapper">
        {popularCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.imgSrc} alt={course.title} className="card-img" />
            <div className="course-card-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
              <button
                className="enroll-btn"
                onClick={() => handleOpenModal(course)}
              >
                <img src={enrollIcon} alt="enroll" className="card-icon" />{" "}
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn" onClick={handleViewAllCourses}>
        View All Courses
      </button>
      <Modal open={openFirst} onClose={() => setOpenFirst(false)} center>
        {selectedCourse && (
          <div className="modal-header">
            <img
              src={selectedCourse.imgSrc}
              alt={selectedCourse.title}
              className="modal-img"
            />
            <h3 className="modal-title">{selectedCourse.title}</h3>
          </div>
        )}
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Your name*
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Mobile Number*
            </label>
            <PhoneInput
              defaultCountry="in"
              value={mobileNumber}
              onChange={(mobile) => setMobileNumber(mobile)}
            />
          </div>
          <div className="form-group-agree">
            <input
              type="checkbox"
              id="agree"
              className="agree-checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="agree" className="agree-label">
              By providing your contact details, you agree to our{" "}
              <a href="/privacy-policy" className="agree-label-highlight">
                Privacy Policy
              </a>
            </label>
          </div>
          <div className="submit-btn-container">
            <button type="submit" disabled={!agreed} className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        open={openSecond}
        onClose={handleCloseSecondModal}
        center
        classNames={{ modal: "success-modal" }}
      >
        <div className="success-modal-content">
          <img
            src="./right-icon.png"
            alt="success-icon"
            className="success-img"
          />
          <p className="success-modal-title">Thanks for your interest</p>
          <p className="success-modal-desc">We will get back to you soon</p>
          <div className="submit-btn-container">
            <button
              type="button"
              className="submit-btn ok-btn"
              onClick={handleCloseSecondModal}
            >
              OKAY!
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PopularCourses;
