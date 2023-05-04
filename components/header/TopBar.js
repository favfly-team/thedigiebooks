import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="flat-infomation">
              <li className="phone">
                <FaPhoneAlt className="mr-2" />
                Call us:{" "}
                <a href="+917003860702" title="phone">
                  +91 7003860702
                </a>
              </li>
              <li className="email">
                <FaEnvelope className="mr-2" />
                Email:{" "}
                <a href="mailto:hello@thedigiebooks.com" title="email">
                  hello@thedigiebooks.com
                </a>
              </li>
            </ul>
            <div className="flat-questions">
              <Link href="/contact" className="appointment">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
