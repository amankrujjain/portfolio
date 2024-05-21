import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";

const portfolioItems = [
  {
    id: 1,
    category: "Speed Transfer",
    title: "Web Application for Desiverse",
    imageUrl: "img/portfolio/1.jpg",
    projectUrl: "https://example.com/project1",
    imgThumb:"/img/thumbs/4-2.jpg",
    additionalImgOne:"img/service/1.jpg",
    additionalImgTwo:"img/service/2.jpg",
    additionalImgThree:"img/service/3.jpg"
  },
  {
    id: 2,
    category: "FinixPe",
    title: "Web Application for Desiverse",
    imageUrl: "img/portfolio/2.jpg",
    projectUrl: "https://www.finixpe.com/",
    imgThumb:"/img/thumbs/4-2.jpg",
    additionalImgOne:"img/service/1.jpg",
    additionalImgTwo:"img/service/2.jpg",
    additionalImgThree:"img/service/3.jpg"
  },
  {
    id: 3,
    category: "Imsom",
    title: "Web Application for Desiverse",
    imageUrl: "img/portfolio/3.jpg",
    projectUrl: "https://www.imsom.org/",
    imgThumb:"/img/thumbs/4-2.jpg",
    additionalImgOne:"img/service/1.jpg",
    additionalImgTwo:"img/service/2.jpg",
    additionalImgThree:"img/service/3.jpg"
  },
  {
    id: 4,
    category: "Chat Bot Static",
    title: "Web Application for Desiverse",
    imageUrl: "img/portfolio/4.jpg",
    projectUrl: "https://brainwaveeai.netlify.app/",
    imgThumb:"/img/thumbs/4-2.jpg",
    additionalImgOne:"img/service/1.jpg",
    additionalImgTwo:"img/service/2.jpg",
    additionalImgThree:"img/service/3.jpg"
  }
];

const Portfolio = () => {
  const [popup, setPopup] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openPopup = (project) => {
    setCurrentProject(project);
    setPopup(true);
  };

  return (
    <Fragment>
      <DetailsPopup open={popup} close={() => setPopup(false)} project={currentProject} />
      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                Feel free to check out some of my work that I am proud of!
              </p>
            </div>
            <div className="portfolio_list">
              <ul>
                {portfolioItems.map((item) => (
                  <li key={item.id} className="wow fadeInUp" data-wow-duration="1s">
                    <div className="list_inner">
                      <div
                        className="background_image"
                        data-img-url={item.imageUrl}
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                      <div className="content">
                        <div className="details">
                          <span className="category">
                            <a href="#">{item.category}</a>
                          </span>
                          <h3 className="title">
                            <a href="#">
                              {item.title.split("<br />").map((line, index) => (
                                <Fragment key={index}>
                                  {line}
                                  <br />
                                </Fragment>
                              ))}
                            </a>
                          </h3>
                          <span className="view_project">
                            <a href="#">
                              View Project <i className="icon-right-big" />
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="overlay" />
                      <a
                        className="devman_tm_full_link portfolio_popup c-pointer"
                        onClick={() => openPopup(item)}
                      />
                    </div>
                  </li>
                ))}
                <div
                  className="shape_1 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
                <div
                  className="shape_2 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
