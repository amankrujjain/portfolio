import { Fragment, useEffect, useRef, useState } from "react";

const accordionData = [
  {
    title: "Work Strategy",
    details:
      "Strategic planning is key. My work strategy involves thorough research, efficient coding, and continuous testing to ensure top-quality results.",
  },
  {
    title: "The Process of Work",
    details:
      "My work process includes detailed planning, collaborative brainstorming, precise coding, rigorous testing, and seamless deployment to ensure exceptional outcomes.",
  },
  {
    title: "Core Value of Development",
    details:
      "Integrity, innovation, and excellence are my core values in development. They guide every project, ensuring high-quality, impactful results.",
  },
  {
    title: "Desire to Work Hard",
    details:
      "My desire to work hard drives my success. Commitment, perseverance, and a strong work ethic are at the heart of every project.",
  },
];

const Accordion = () => {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  useEffect(() => {
    setActive(0);
  }, [contentEl.current]);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <Fragment>
      <div
        className="devman_tm_accordion"
        data-active={1}
        data-type="accordion"
      >
        {accordionData.map((accordion, i) => (
          <div
            className={`accordion_in ${active == i ? "acc_active" : ""}`}
            key={i}
          >
            <div className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </div>
            <div
              className={`acc_content d-block`}
              ref={contentEl}
              style={
                active === i
                  ? {
                      height:
                        contentEl.current && contentEl.current.scrollHeight,
                    }
                  : { height: "0px" }
              }
            >
              <div className="acc_content_in">
                <p>{accordion.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Accordion;
