import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="top style2">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div id="logo" className="logo">
              <Link href="/">
                <img
                  src="https://images.prismic.io/thedigiebooks/2ecd8fa2-cc22-4384-b598-fe7f5b139e7d_logo.png?auto=compress,format"
                  alt="logo Finance Business"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-8 col-xs-12">
            <div className="flat-open-hours d-flex pr-sm-3 mt-4 mb-3">
              <p className="icon">
                <FaMapMarkerAlt />
              </p>
              <p className="text">
                Address
                <br />
                <span>
                  India : 14/110 Golf Club Road Kolkata 700033,
                  <br /> USA : 2010 Baltimore Road, Suite F42 Rockville, MD
                  20851
                </span>
              </p>
            </div>
            <div className="flat-open-hours d-flex mt-sm-4 mb-4">
              <p className="icon">
                <FaPhoneAlt />
              </p>
              <p className="text">
                Contacts
                <br />
                <span className="d-block">
                  India : +91 70038 60702,
                  <br />
                  USA : +1 240-481-5325, <br /> hello@thedigiebooks.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
