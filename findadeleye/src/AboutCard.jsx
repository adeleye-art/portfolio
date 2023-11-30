/* eslint-disable react/prop-types */
const AboutCard = ({ about, certification }) => (
  <div className="about-style-two-thumb text-center">
    <div>{about.img}</div>
    
    <div className="info">
      <h3>{about.name}</h3>
      <a href={`mailto:${about.email}`}>{about.email}</a>
      
      <ul className="achivement">
        <li>
          <div className="icon">{certification.img}</div>
          <div className="info"><h3>{certification.name}</h3></div>
        </li>
        
        <li>
          <div className="icon">{certification.img1}</div>
          <div className="info"><h3>{certification.name2}</h3></div>
        </li>
      </ul>
    </div>
  </div>
);


export default AboutCard