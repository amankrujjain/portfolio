import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                Dliquip ex ea commo do conse namber onequa ute irure dolor in
                reprehen derit in voluptate
              </p>
            </div>
            <div className="portfolio_list">
              <ul>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/1.jpg"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">Speed Transfer</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Desiverse
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
                      className="devman_tm_full_link popup-youtube"
                      href=""
                    />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/2.jpg"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">Ecommerce</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Desiverse
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
                      className="devman_tm_full_link popup-vimeo"
                      href=""
                    />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/3.jpg"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">File Drive</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Desiverse
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
                      className="devman_tm_full_link soundcloude_link mfp-iframe audio"
                      href="#"
                    />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/4.jpg"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">Static</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Desiverse
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
                      onClick={() => setPopup(true)}
                    />
                  </div>
                </li>
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
