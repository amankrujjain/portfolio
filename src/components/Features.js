import Image from  "next/image"

const features_list = [
  {
    title: "Time Management",
    icon: "/img/svg/design.svg",
    text: "I'm someone who is working with various programming languages, frameworks, and technologies. Quickly adapts the work culture and helps in productivity of the organization.",
  },
  {
    title: "Modern Web Apps",
    icon: "/img/svg/development.svg",
    text: "Been working on modern web application since 2 years and practice multiple modern design structures, techniques and modern tools.",
  },
  {
    title: "Complex Coding",
    icon: "/img/svg/landing.svg",
    text: "Handling errors and complex coding are the most challenging part, always upfront to handle such senarios. Eager to lean and develope my skills.",
  }
];
const Features = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`"0.${i * 2}s"`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <h3>{feature.title}</h3>
                      </div>
                      <div className="icon">
                        <Image className="svg" src={feature.icon} alt="" height={50} width={100} />
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
