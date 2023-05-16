import {
  FaHeart,
  FaCaretRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Link from "next/link";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

const Footer = () => {
  const quickLinks = [
    { title: "About", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Why Us", url: "/why-us" },
    { title: "Blog", url: "/blogs" },
  ];

  const companyLinks = [
    { title: "Partners", url: "/partners" },
    { title: "Contact Us", url: "/contact" },
    // { title: "T & C", url: "/terms-and-conditions" },
    { title: "Privacy Policy", url: "/privacy-policy" },
  ];

  const [toggler, setToggler] = useState(false);

  return (
    <>
      <footer id="footer">
        <div className="footer-widgets">
          <div className="container">
            <div className="row widget-box pb-lg-3">
              <div className="col-md-10 col-lg-5 mb-4">
                <div className="widget widget-text">
                  <h3 className="footer-heading">About Us</h3>
                  <p>
                    DIGIEBOOKS is an online Book Keeping and Financial
                    Accounting Service Provider. At DIGIEBOOKS we aim at
                    providing our clients with the best online accounting
                    services from our end.
                  </p>
                  <div className="mt-4 mb-3 d-flex align-items-center">
                    <img
                      style={{ width: "100px" }}
                      className="mr-3"
                      src="https://images.prismic.io/thedigiebooks/0c923089-afa5-46bc-a2a1-9e15c5deed3d_BNI+Proud+Member.png"
                      alt="BNI Proud Member"
                    />
                    <img
                      onClick={() => setToggler(!toggler)}
                      style={{ width: "100px", cursor: "pointer" }}
                      src="https://images.prismic.io/thedigiebooks/9c61795e-d93e-424b-95ab-e87efe2ac03a_20f9c6aa-253d-4305-b6c4-9331a7b7232a_png-clipart-iso-9000-iso-9001-2015-international-organization-for-standardization-quality-management-system-business-blue-text-removebg-preview.png"
                      alt="ISO Certified"
                    />
                  </div>
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
                      <a className="d-flex">
                        <i className="footer-icon">
                          <FaPhoneAlt className="mr-1" />
                        </i>
                        India : +91 70038 60702
                      </a>
                    </li>
                    <li>
                      <a className="d-flex">
                        <i className="footer-icon">
                          <FaPhoneAlt />
                        </i>
                        USA : +1 240-481-5325
                      </a>
                    </li>
                    <li>
                      <a className="d-flex">
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
                          India : 14/110, Golf Club Road, Kolkata, 700033
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex">
                        <i className="footer-icon">
                          <FaMapMarkerAlt />
                        </i>
                        <span>
                          USA : 2010 Baltimore Road, Suite F42 Rockville, MD
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
                    Copyright © 2023 <Link href="/"> Digie Books</Link>. All
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
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://images.prismic.io/thedigiebooks/3e568672-a379-498e-9896-e2a62bec5764_iso-img.jpg?auto=compress,format",
        ]}
      />
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
