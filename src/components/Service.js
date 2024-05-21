import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";
import Image from "next/image"

const serviceData = [
  {
    name: "Web Application",
    icon: "/img/svg/cpu.svg",
    img: "/img/service/1.jpg",
    description: [
      "As a MERN stack developer, I specialize in creating dynamic web applications using MongoDB, Express.js, React, and Node.js. My expertise lies in building responsive user interfaces with React and managing server-side operations with Node.js. By leveraging Express.js, I develop robust back-end infrastructures, ensuring efficient data flow and application performance.",
      "With a deep understanding of front-end and back-end technologies, I deliver full-stack solutions tailored to client needs. My skillset includes designing RESTful APIs, implementing user authentication, and optimizing web applications for speed and scalability. This versatility makes me invaluable in modern web development projects.",
      "In addition to my technical skills, I excel in problem-solving and project management. I collaborate effectively with cross-functional teams, translating business requirements into functional code. My commitment to continuous learning ensures I stay updated with the latest industry trends and best practices, driving innovation and excellence in every project I undertake.",
    ],
  },
  {
    name: "Mobile Responsive",
    icon: "/img/svg/phone.svg",
    img: "/img/service/2.jpg",
    description: [
      "As a web developer, I specialize in creating responsive designs using custom CSS, Tailwind, and Bootstrap. My expertise lies in crafting visually appealing and user-friendly interfaces that adapt seamlessly to different devices and screen sizes. By leveraging the power of custom CSS, I can fine-tune the design details to meet specific project requirements and client preferences.",
      "With a deep understanding of Tailwind and Bootstrap frameworks, I deliver efficient and scalable design solutions. Tailwind allows me to rapidly build custom designs with utility-first classes, while Bootstrap provides a robust foundation with its pre-designed components.",
      "This combination enables me to create aesthetically pleasing and functional web applications that perform well across all devices.",
    ],
  },
  {
    name: "Ecommerce",
    icon: "/img/svg/web.svg",
    img: "/img/service/3.jpg",
    description: [
      "With my expertise in React, Node.js, and Express, I can help you create a secure, fast, and reliable e-commerce platform tailored to your needs. React's dynamic user interfaces ensure an engaging shopping experience, while Node.js and Express provide a robust backend that handles high traffic efficiently.",
      "Security is a top priority. I implement industry-standard practices such as data encryption, secure payment gateways, and regular security audits to protect your customers' information. This ensures your e-commerce platform is safeguarded against potential threats, providing peace of mind for both you and your customers.",
      "I focus on performance optimization to ensure your site loads quickly and operates smoothly. This includes efficient database management with MongoDB, seamless integrations, and responsive design for all devices. Let’s work together to build an e-commerce solution that stands out in today’s competitive market.",
    ],
  },
  {
    name: "Website Maintenance",
    icon: "/img/svg/star.svg",
    img: "/img/service/4.jpg",
    description: [
      "I offer top-notch website maintenance services to ensure your site remains secure, fast, and reliable. Regular updates and performance optimizations are essential to keep your website running smoothly, and I am here to handle that for you.",
      "I offer top-notch website maintenance services to ensure your site remains secure, fast, and reliable. Regular updates and performance optimizations are essential to keep your website running smoothly, and I am here to handle that for you.",
      "Focusing on maintaining seamless user experience across all devices. This involves responsive design updates, improving load times, and ensuring compatibility with various browsers and platforms. My goal is to provide consistent, high-quality performance so that your website remains an asset to your business, attracting and retaining customers effectively.",
    ],
  },
];
const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                  >
                    <div className="list_inner">
                      <Image className="svg" src={service.icon} alt="" height={60} width={60} />
                      <h3 className="title">{service.name}</h3>
                      <p className="text">
                        {service.description[0].substring(0, 138)}.
                      </p>
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <Image
                        className="popup_service_image"
                        src="/img/service/1.jpg"
                        alt=""
                        height={50} width={50}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
