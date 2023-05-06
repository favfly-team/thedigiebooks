import {
  FaHeart,
  FaCaretRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { title: "About", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Blog", url: "/Blogs" },
  ];

  const companyLinks = [
    { title: "Why Us", url: "/why-us" },
    { title: "Partners", url: "/partners" },
    { title: "Contact Us", url: "/contact-us" },
    { title: "Privacy Policy", url: "/privacy-policy" },
  ];

  return (
    <>
      <footer id="footer">
        <div className="footer-widgets">
          <div className="container">
            <div className="row widget-box">
              <div className="col-md-10 col-lg-5 mb-4">
                <div className="widget widget-text">
                  <h3 className="footer-heading">About Us</h3>
                  <p>
                    Lorem ipsum dolor sit consectetur adipiscing elit sed do
                    eiusmod tempor incididunt ut labore et dolore magna veniam
                    aliqua.Ut enim ad minim veniam
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 mb-4">
                <div className="widget widget-services">
                  <h3 className="footer-heading">Quick Links</h3>
                  <ul className="one-half">
                    {quickLinks?.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.url}
                          className="d-flex align-items-center">
                          <FaCaretRight className="mr-2" /> {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-2 mb-4">
                <div className="widget widget-services">
                  <h3 className="footer-heading">Companies</h3>
                  <ul className="one-half">
                    {companyLinks?.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.url}
                          className="d-flex align-items-center">
                          <FaCaretRight className="mr-1" /> {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="widget widget-services">
                  <h3 className="footer-heading">Contact Us</h3>
                  <ul className="one-half">
                    <li>
                      <a href="tel:+917003860702" className="d-flex">
                        <i className="footer-icon">
                          <FaPhoneAlt className="mr-1" />
                        </i>
                        India : +91 70038 60702
                      </a>
                    </li>
                    <li>
                      <a href="tel:+1240-481-5325" className="d-flex">
                        <i className="footer-icon">
                          <FaPhoneAlt />
                        </i>
                        Usa : +1 240-481-5325
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:hello@thedigiebooks.com"
                        className="d-flex">
                        <i className="footer-icon">
                          <FaEnvelope />
                        </i>
                        hello@thedigiebooks.com
                      </a>
                    </li>
                    <li>
                      <a className="d-flex">
                        <i className="footer-icon">
                          <FaMapMarkerAlt />
                        </i>
                        <span>
                          India : 25/1, Baranashi Ghosh Street Kolkata 700007,
                          India
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex">
                        <i className="footer-icon">
                          <FaMapMarkerAlt />
                        </i>
                        <span>
                          Usa : 2010 Baltimore Road, Suite F42 Rockville, MD
                          20851
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright">
                  <p className="text-center">
                    Copyright © 2023 <Link href="/"> The Digie Books</Link>. All
                    Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ========== FAVFLY ========= */}
          <div className="favfly pt-3">
            <div className="divider-icon pt-0 m-0 border-0 position-relative">
              <i className="fa">
                <FaHeart />
              </i>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              title="Best digital marketing company in kolkata"
              href={`https://favfly.com?ref=${process.env.NEXT_PUBLIC_PRISMIC_ID}.${process.env.NEXT_PUBLIC_TLD}`}
              className="container pt-3 d-block">
              Growing with Favfly
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer-heading {
          color: #fff;
          margin-bottom: 10px;
          font-weight: 600;
          font-size: 18px;
        }
        .footer-icon {
          min-width: 25px;
        }
        .footer-bottom .copyright {
          float: none;
        }

        .favfly {
          letter-spacing: 1px;
          text-align: center;
        }
        .favfly a {
          color: #6b787e;
          font-weight: 500;
        }
        .divider-icon:before {
          left: 0;
        }
        .divider-icon:before,
        .divider-icon:after {
          position: absolute;
          top: 50%;
          content: "";
          border-top: 1px solid #394348;
          width: calc(50% - 30px);
        }
        .divider-icon i {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          font-size: 18px;
          color: #6b787e;
        }
        .divider-icon:after {
          right: 0;
        }
        .divider-icon:before,
        .divider-icon:after {
          position: absolute;
          top: 50%;
          content: "";
          border-top: 1px solid #394348;
          width: calc(50% - 30px);
        }
        .favfly i,
        .favfly a {
          transition: all 0.3s ease-in-out;
        }

        .favfly:hover a,
        .favfly:hover i {
          color: #18ba60;
        }
      `}</style>
    </>
  );
};

export default Footer;
