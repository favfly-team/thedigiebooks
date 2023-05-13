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
                Call us: <a title="phone">+91 70038 60702</a>
              </li>
              <li className="email">
                <FaEnvelope className="mr-2" />
                Email: <a title="email">hello@thedigiebooks.com</a>
              </li>
            </ul>
            <div className="flat-questions">
              <Link href="/contact" className="appointment">
                Start your free trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
