import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <main className="About">
      <div className="card">
        <h2>More information</h2>
        <hr />
        <div className="cardBody">
          <section className="myProfile">
            <h4>Name:</h4>
            <p> Nilu Nassiri</p>
            <br />
            <h4>Role:</h4>
            <p>Front-End Developer (React.js) with experience in UX</p>
            <br />
            <h4>Location:
              
            </h4>
            <p>Tallinn, Harjumaa, Estonia</p>
            <br />
            <h4>Short Brief:</h4>
            <p>
              Hi, I am Nilu, highly motivated and adaptable junior front-end
              developer specializing in the React framework, with a solid
              foundation in UX design. I am eager to contribute my skills and
              creativity to a dynamic development team.
              <br />
              I am experienced in conducting user research, creating wireframes,
              and prototyping, I possess a keen eye for aesthetics and
              usability. I am passionate about delivering high-quality code and
              optimizing web applications for superior performance. As an avid
              learner, I stay abreast of the latest trends and best practices in
              front-end development and strive to continuously refine my skills.
              <br />I am seeking an engaging opportunity to contribute my
              talents and grow as a front-end developer within a
              forward-thinking organization.
            </p>
            <br />
            <h4>Contact info:</h4>
            <div>
              <FaEnvelope className="icon" />
              <a href="">nilu.nassiri@gmail.com</a>
            </div>
            <div>
              <FaLinkedin className="icon" />
              <a href="https://www.linkedin.com/in/nilu-nassiri/">
                https://www.linkedin.com/in/nilu-nassiri/
              </a>
            </div>
            <div>
              <FaGithub className="icon" />
              <a href="https://github.com/nilunassiri">
                https://github.com/nilunassiri
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
