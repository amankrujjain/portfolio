import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../sliderProps";
import { dataImage, imgToSVG } from "../utilits";
import Image from "next/image";

const Testimonials = () => {
  useEffect(() => {
    dataImage();
    imgToSVG();
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_testimonials">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Testimonial</span>
            <h3>What Clients Say</h3>
            <p>
              A feedback is always important! Do check out my feedbacks
            </p>
          </div>
          <div
            className="testimonials_list wow fadeInUp"
            data-wow-duration="1s"
          >
            <Swiper
              {...testimonialsSlider}
              className="owl-carousel owl-theme owl-loaded"
            >
              <SwiperSlide>
                <div className="list_inner">
                  <Image className="svg" src="/img/svg/quote.svg" alt="" height={100} width={100} />
                  <p className="text">
                  Amazing service! The website looks fantastic and functions perfectly. Couldn&apos;t be happier with the results. Highly recommend!
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/1.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>Shubham Gupta</h3>
                      <span>CEO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <Image className="svg" src="/img/svg/quote.svg" alt="" height={100} width={100} />
                  <p className="text">
                  Outstanding web development! Quick turnaround, professional design, and excellent communication. Our site has never looked better. Thanks!
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/3.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>Divyank</h3>
                      <span>Owner</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <Image className="svg" src="/img/svg/quote.svg" alt="" height={100} width={100} />
                  <p className="text">
                  Top-notch work! Our new website is sleek, fast, and user-friendly. The team exceeded our expectations. Great job!
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/4.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>Rahul Singh</h3>
                      <span>Marketing Head</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <Image className="svg" src="/img/svg/quote.svg" alt="" height={100} width={100} />
                  <p className="text">
                  Fantastic experience! Delivered a stunning website that boosted our online presence significantly. Very pleased with the service!
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/5.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>Hemant Raj</h3>
                      <span>CMA</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="owl-dots"></div>
            </Swiper>
            <div
              className="shape moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
            <div
              className="shape_2 moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
