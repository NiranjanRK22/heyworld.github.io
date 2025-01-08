import React from "react";
import "./PopularCourses.css";
import enrollIcon from "../../assets/svg/enrollicon.svg";

function PopularCourses() {
  return (
    <div className="popular-courses-container">
      <h2 className="popular-courses-title">
        Popular <span className="courses-title-text">Courses</span>
      </h2>
      <div className="popular-courses-wrapper">
        <div className="course-card">
          <img src="./HTMLCSS.png" alt="course1" className="card-img" />
          <div className="course-card-content">
            <h3 className="course-title">HTML and CSS</h3>
            <p className="course-desc">
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS
            </p>
            <button className="enroll-btn">
              <img src={enrollIcon} alt="enroll" className="card-icon" /> Enroll
              Now
            </button>
            {/* <button className="download-btn">
              <img src={downloadIcon} alt="download" className="card-icon" />{" "}
              Download Curriculum
            </button> */}
          </div>
        </div>
        <div className="course-card">
          <img src="./java.png" alt="course2" className="card-img" />
          <div className="course-card-content">
            <h3 className="course-title">Java</h3>
            <p className="course-desc">
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS
            </p>
            <button className="enroll-btn">
              <img src={enrollIcon} alt="enroll" className="card-icon" /> Enroll
              Now
            </button>
            {/* <button className="download-btn">
              <img src={downloadIcon} alt="download" className="card-icon" />{" "}
              Download Curriculum
            </button> */}
          </div>
        </div>
        <div className="course-card">
          <img src="./python.png" alt="course3" className="card-img" />
          <div className="course-card-content">
            <h3 className="course-title">Python</h3>
            <p className="course-desc">
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS
            </p>
            <button className="enroll-btn">
              <img src={enrollIcon} alt="enroll" className="card-icon" /> Enroll
              Now
            </button>
            {/* <button className="download-btn">
              <img src={downloadIcon} alt="download" className="card-icon" />{" "}
              Download Curriculum
            </button> */}
          </div>
        </div>
        <div className="course-card">
          <img src="./c-sharp.png" alt="course4" className="card-img" />
          <div className="course-card-content">
            <h3 className="course-title">C#</h3>
            <p className="course-desc">
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS
            </p>
            <button className="enroll-btn">
              <img src={enrollIcon} alt="enroll" className="card-icon" /> Enroll
              Now
            </button>
            {/* <button className="download-btn">
              <img src={downloadIcon} alt="download" className="card-icon" />{" "}
              Download Curriculum
            </button> */}
          </div>
        </div>
        <div className="course-card">
          <img src="./reactjs.png" alt="course5" className="card-img" />
          <div className="course-card-content">
            <h3 className="course-title">React JS</h3>
            <p className="course-desc">
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS
            </p>
            <button className="enroll-btn">
              <img src={enrollIcon} alt="enroll" className="card-icon" /> Enroll
              Now
            </button>
            {/* <button className="download-btn">
              <img src={downloadIcon} alt="download" className="card-icon" />{" "}
              Download Curriculum
            </button> */}
          </div>
        </div>
        <div className="course-card">
          <img src="./angularjs.png" alt="course6" className="card-img" />
          <div className="course-card-content">
            <h3 className="course-title">Angular JS</h3>
            <p className="course-desc">
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS
            </p>
            <button className="enroll-btn">
              <img src={enrollIcon} alt="enroll" className="card-icon" /> Enroll
              Now
            </button>
            {/* <button className="download-btn">
              <img src={downloadIcon} alt="download" className="card-icon" />{" "}
              Download Curriculum
            </button> */}
          </div>
        </div>
        <div className="course-card">
          <img src="./dotnet.png" alt="course7" className="card-img" />
          <div className="course-card-content">
            <h3 className="course-title">.NET Core</h3>
            <p className="course-desc">
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS
            </p>
            <button className="enroll-btn">
              <img src={enrollIcon} alt="enroll" className="card-icon" /> Enroll
              Now
            </button>
            {/* <button className="download-btn">
              <img src={downloadIcon} alt="download" className="card-icon" />{" "}
              Download Curriculum
            </button> */}
          </div>
        </div>
        <div className="course-card">
          <img src="./springboot.png" alt="course8" className="card-img" />
          <div className="course-card-content">
            <h3 className="course-title">Spring Boot</h3>
            <p className="course-desc">
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS
            </p>
            <button className="enroll-btn">
              <img src={enrollIcon} alt="enroll" className="card-icon" /> Enroll
              Now
            </button>
            {/* <button className="download-btn">
              <img src={downloadIcon} alt="download" className="card-icon" />{" "}
              Download Curriculum
            </button> */}
          </div>
        </div>
      </div>
      <button className="view-all-btn">View All Courses</button>
    </div>
  );
}

export default PopularCourses;
