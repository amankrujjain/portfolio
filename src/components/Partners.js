import Image from "next/image";

const Partners = ({ dark }) => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <ul>
              <li>
                <div className="list_inner">
                  <Image
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    src={`/img/partners/${dark ? "light" : "dark"}/1.png`}
                    alt=""
                    height={90} width={211}
                  />
                  <a className="devman_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <Image
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                    src={`/img/partners/${dark ? "light" : "dark"}/2.png`}
                    alt=""
                    height={90} width={211}
                  />
                  <a className="devman_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <Image
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                    src={`/img/partners/${dark ? "light" : "dark"}/3.png`}
                    alt=""
                    height={90} width={211}
                  />
                  <a className="devman_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <Image
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                    src={`/img/partners/${dark ? "light" : "dark"}/4.png`}
                    alt=""
                    height={90} width={211}
                  />
                  <a className="devman_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <Image
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    src={`/img/partners/${dark ? "light" : "dark"}/5.png`}
                    alt=""
                    height={90} width={211}
                  />
                  <a className="devman_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <Image
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                    src={`/img/partners/${dark ? "light" : "dark"}/6.png`}
                    alt=""
                    height={90} width={211}
                  />
                  <a className="devman_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <Image
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                    src={`/img/partners/${dark ? "light" : "dark"}/7.png`}
                    alt=""
                    height={90} width={211}
                  />
                  <a className="devman_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <Image
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                    src={`/img/partners/${dark ? "light" : "dark"}/8.png`}
                    alt=""
                    height={90} width={211}
                  />
                  <a className="devman_tm_full_link" href="#" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
