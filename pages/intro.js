import Head from "next/head";
import Layout from "../src/layouts/Layout";
import Mouse from "../src/layouts/Mouse";
import Image from "next/image"

const Intro = () => {
  return (
    <Layout>
      <Head>
        <title>Aman Ujjain | Intro</title>
      </Head>
      <div className="devman_tm_intro">
        <div className="devman_tm_intro_fixed_price">
          <span className="anim" />
          <span className="anim" />
          <span className="anim" />
          <a
            href="https://themeforest.net/user/codeefly/portfolio"
            target="_blank"
            rel="noreferrer"
            className="pricing-info anim"
          >
            -70%
          </a>
        </div>
        <div className="short_info">
          <Image src="img/logo/dark.png" alt="" />
          <h3>Aman Kumar Ujjain Portfolio</h3>
        </div>
        <span className="intro_line" />
        <span className="intro_line_2" />
        <span className="intro_line_3" />
        <div className="demos">
          <div className="left">
            <div className="desc">
              <Image src="/img/intro/1.png" alt="" />
              <h3 className="title">Light Demo</h3>
            </div>
            <a
              className="intro_link"
              href="/"
              target="_blank"
              rel="noreferrer"
            />
          </div>
          <div className="right">
            <div className="desc">
              <Image src="/img/intro/1.png" alt="" />
              <h3 className="title">Dark Demo</h3>
            </div>
            <a
              className="intro_link"
              href="/index-dark"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>
      </div>
      <Mouse />
    </Layout>
  );
};
export default Intro;
