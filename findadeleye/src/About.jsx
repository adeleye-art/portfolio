/* eslint-disable react/prop-types */
import  { useEffect } from "react";
import AboutCard from "./AboutCard";
import leye2 from './assets/leye2.jpg';
import azure from './assets/azure.png';
import meta from './assets/meta.png';

const certification = {
  img1: <img src={meta} alt="time" />,
  img: <img src={azure} alt="time1" />,
  name: "MICROSOFT",
  name2: "META"
};

const about = {
  name: "Adeleye",
  email: "adeleyealarape@gmail.com",
  img: <img src={leye2} alt="meis" />
};

const About = ({ handleEmailClick, handleWhatsAppClick, handleLinkedInClick }) => {
  useEffect(() => {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '/adeleye.pdf'; // Updated path
      link.download = 'adeleye_frontend_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    document.getElementById('downloadBtn').addEventListener('click', handleDownload);

    return () => {
      document.getElementById('downloadBtn').removeEventListener('click', handleDownload);
    };
  }, []);

  return (
    <div id="about" className="about-style-one-area default-padding-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <AboutCard about={about} certification={certification} />
          </div>
          <div className="col-lg-6 offset-lg-1 mt-50">
            <div className="about-style-one-info">
              <h3 className="sub-title">ABOUT ME</h3>
              <h2 className="title">I CAN DEVELOP SOLUTIONS THAT HELP PEOPLE</h2>
              <p>
                I am a results-oriented and adaptable frontend developer with 3 years of expertise in JavaScript, React.js, and Redux.
                My passion is crafting captivating and user-friendly web applications with a strong emphasis on creative design.
                With a proven track record of delivering projects on time and within budget, I showcase strong problem-solving
                skills and an innovative approach. Committed to staying updated on the latest advancements in the field,
                I bring a service-focused mindset, dedicated to exceeding client expectations and ensuring exceptional user satisfaction.
              </p>
              <button id="downloadBtn" className="mt-10 smooth-menu">DOWNLOAD CV</button>
              <div className="bio about-item">
                <h3>Biography</h3>
                <ul className="biography-table">
                  <p>Name <br /> <span>Adeleye Remi-Alarape</span></p>
                  <p>Email <br /><span onClick={handleEmailClick} style={{ cursor: 'pointer' }}>adeleyealarape@gmail</span></p>
                  <p>LinkedIn <br /><span onClick={handleLinkedInClick} style={{ cursor: 'pointer' }}>Adeleye Remi-Alarape</span></p>
                  <p>WhatsApp <br /><span onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}>08108301202</span></p>
                </ul>
              </div>
              <div className="about-item">
                <h3>Personal Skill</h3>
                <ul className="skill-items mt-10">
                  <li>
                    <div className="icon"></div>
                    <div className="content"><span>75%</span><h5>Object oriented programming</h5></div>
                  </li>
                  <li>
                    <div className="icon"></div>
                    <div className="content"><span>90%</span><h5>Front-End with React</h5></div>
                  </li>
                  <li>
                    <div className="icon"></div>
                    <div className="content"><span>89%</span><h5>Advance frontend development</h5></div>
                  </li>
                </ul>
              </div>
              <div className="about-item">
                <h3>Experience</h3>
                <ul className="education-table">
                  <li>
                    <h4>jr. Software Engineer</h4>
                    <h5>Wragby Business Solutions (microsoft partner)</h5>
                    <span>2023 - Present</span>
                    <p>
                      Contributing to innovative software solutions at Wragby Business Solutions, I actively participate in designing
                      and developing cutting-edge applications. My role involves collaborating with a talented team to deliver
                      high-quality software that meets the unique needs of our clients. Through this experience, I've gained valuable
                      insights into the dynamic and evolving landscape of software engineering.
                    </p>
                  </li>
                  <li>
                    <h4>Certification </h4>
                    <h5>B.ENG Electrical and Electronics Engineering</h5>
                    <span>2014 - 2021</span>
                    <p>
                      Completing my B.ENG in Electrical and Electronics Engineering equipped me with a strong foundation in the
                      principles of electrical systems and electronics. This comprehensive program not only provided theoretical knowledge
                      but also practical insights, enabling me to apply my skills effectively. Through rigorous coursework and hands-on
                      projects, I developed a solid understanding of the field, laying the groundwork for a successful career in engineering.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
