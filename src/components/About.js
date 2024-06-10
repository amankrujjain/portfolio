import Image from "next/image";

const aboutData = {
  designation: "MERN Stack Developer",
  title: "I Develop Application that Help People",
  text: [
    "A highly skilled MERN Stack Developer with over two years of experience in designing and integrating complex web applications. Proficient in JavaScript, React.js, Node.js, MongoDB, PostgreSQL, NestJS, Next.Js, and Express.js, with additional expertise in CMS platforms like WordPress, Wix, and Shopify.",
    " Adept at translating business requirements into technical solutions and passionate about implementing and launching new projects. Seeking to advance my career as a full-stack developer in a technology-driven firm.",
  ],
  skillIcons: [
    { name: "react", icon: "/img/svg/react.svg" },
    { name: "nextjs", icon: "/img/svg/next-js.svg" },
    { name: "mondoDB", icon: "/img/svg/mongodb.svg" },
    { name: "express", icon: "/img/svg/express.svg" },
  ],
};

const About = () => {
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <Image src="/img/thumbs/64-49.jpg" alt="" height={500} width={652} loading="eager" />
                <div className="main" data-img-url="img/about/1.jpg" />
                <div className="extra_image">
                  <div className="image_inner">
                    <Image src="/img/thumbs/1-1.jpg" alt="" height={500} width={500} loading="eager" />
                    <div
                      className="main_extra"
                      data-img-url="img/about/2.jpg"
                    />
                  </div>
                </div>
                {aboutData.skillIcons.map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    <span
                      className={`icon_${i + 1} wow fadeIn`}
                      data-wow-duration="1s"
                      data-wow-delay={`0.${i * 2}s`}
                    >
                      <Image className="svg" src={skill.icon} alt="" height={150} width={150} loading="eager" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                  {`I'm`} a {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <div className="devman_tm_button">
                <a className="anchor" href="#portfolio">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
