import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_skills">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>My Skills</span>
            <h3>I Develop Skills Regularly</h3>
            <p>
              Web development is all about what you learn. Everyday is a progressive day.
            </p>
          </div>
          <div className="skills_wrapper">
            <div className="left">
              <div className="dodo_progress">
                <div
                  className="skillsInner___ progress_inner"
                  data-value={95}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">React</span>
                    <span className="number">95%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={85}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">JavaScript</span>
                    <span className="number">85%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={90}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">NodeJs</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="dodo_progress">
                <div
                  className="skillsInner___ progress_inner"
                  data-value={80}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">MongoDB</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={92}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">Express</span>
                    <span className="number">92%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={95}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">HTML5/CSS3</span>
                    <span className="number">95%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={90}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">NestJs</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={75}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">PostgreSQL</span>
                    <span className="number">75%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
