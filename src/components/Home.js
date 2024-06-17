import Counter from "./Counter";
import Image from "next/image"

const homeData = {
  firstName: "Aman",
  middleName:'Kumar',
  lastName: "Ujjain",
  designation: "MERN Stack Developer",
  address: "India",
  img: "img/hero/2.jpg",
  bio: "Stack proficiency in MongoDB, Express, React, Node.js. Experience in creating modern dynamic complex web applications.",
  numberOfProject: 20,
  numberofyear: 2,
};

const Home = () => {
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/1.jpg" />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello">Hello {`I'm`}</h3>
                <h3 className="name">
                  {homeData.firstName} {homeData.middleName} {homeData.lastName}
                </h3>
                <h3 className="job">
                  {homeData.designation} from {homeData.address}
                </h3>
                <p className="text">{homeData.bio}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="https://github.com/amankrujjain">
                      View GitHub
                    </a>
                  </div>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                      About Me
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">{homeData.firstName}</h3>
              <h3 className="stroke_2">{homeData.lastName}</h3>
            </div>
            <div className="right">
              <div className="image">
                <Image src="/img/thumbs/53-61.jpg" alt="" width={500} height={500} loading="eager" />
                <div className="main" data-img-url={homeData.img} />
                <span className="win">
                  <Image src="/img/svg/javascript.svg" alt="" className="svg" height={500} width={500} loading="eager" />
                </span>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberofyear} />
                    </h3>
                    <span className="item_name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberOfProject} />
                      <span className="extra">+</span>
                    </h3>
                    <span className="item_name">
                      Projects
                      <br />
                      Completed
                    </span>
                  </div>
                </div>
                <span className="circle anim_circle">
                  <Image src="/img/hero/circle.png" alt="" height={200} width={200} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
