import Popup from "./Popup";
import Image from "next/image";
import { useEffect } from "react";

const DetailsPopup = ({ open, close, project }) => {

  useEffect(() => {
    if (project) {
      const elements = document.querySelectorAll("[data-img-url]");
      elements.forEach((element) => {
        const imageUrl = element.getAttribute("data-img-url");
        if (imageUrl) {
          element.style.backgroundImage = `url(${imageUrl})`;
        }
      });
    }
  }, [project]);

  if (!project) return null;

  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <Image src="/img/thumbs/4-2.jpg" alt="" height={500} width={500} />
          <div
            className="main"
            data-img-url={project.imageUrl}
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>{project.title}</h3>
          <span>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              Click Here To Visit Page
            </a>
          </span>
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              We live in a world where we need to move quickly and iterate on
              our ideas as flexibly as possible.
            </p>
            <p>
              Mockups are useful both for the creative phase of the project -
              for instance when {`you're`} trying to figure out your user flows
              or the proper visual hierarchy - and the production phase when
              they phase when they will represent the target product. Building
              mockups strikes the ideal balance ease of modification.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>Alvaro Morata</span>
              </li>
              <li>
                <span className="first">Category</span>
                <span>
                  <a href="#">{project.category}</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>April 22, 2022</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <Image src={project.imgThumb} alt="" height={500} width={500} loading="eager" />
                  <div className="main" data-img-url={project.additionalImgOne} />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <Image src={project.imgThumb} alt="" height={500} width={500} loading="eager" />
                  <div className="main" data-img-url={project.additionalImgTwo} />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <Image src={project.imgThumb} alt="" height={500} width={500} loading="eager" />
                  <div className="main" data-img-url={project.additionalImgThree} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popup>
  );
};

export default DetailsPopup;
