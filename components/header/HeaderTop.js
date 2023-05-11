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
                  className="logo-img"
                  src="https://images.prismic.io/thedigiebooks/806e55c9-d396-48ff-8e2a-dc1e532308a4_Your+Trusted+Accounting+Partner+%282%29.png?auto=compress,format"
                  alt="Digiebooks"
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
                <span className="d-flex mb-2 mt-2">
                  <span className="mr-2">India:</span>
                  <span>14/110, Golf Club Road, Kolkata, 700033</span>
                </span>
                <span>
                  <span className="d-flex">
                    <span className="mr-2">USA:</span>
                    <span>
                      2010 Baltimore Road, Suite F42 Rockville, MD 20851
                    </span>
                  </span>
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
                <span className="d-flex mb-2 mt-2">
                  <span className="mr-2">India:</span>
                  <span>+91 70038 60702</span>
                </span>
                <span className="d-flex mb-2">
                  <span className="mr-2">USA:</span>
                  <span>+1 240-481-5325</span>
                </span>
                <span className="d-flex mb-2">
                  <span>hello@thedigiebooks.com</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .logo-img {
          width: 180px;
        }
        .top.style2 .flat-open-hours .text,
        .top.style2 .flat-address .text {
          font-size: 18px;
        }
        .top.style2 .flat-open-hours .text span,
        .top.style2 .flat-address .text span {
          font-size: 14px;
          font-weight: 600;
          color: #262626;
          line-height: 1.2;
        }
        @media (max-width: 991px) {
          .top.style2 .flat-open-hours {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderTop;
