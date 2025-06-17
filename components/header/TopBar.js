import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

const TopBar = ({ value }) => {
  const [show, setShow] = useState(true);
  const [prevVal, setPrevVal] = useState(0);

  useEffect(() => {
    if (value < prevVal) {
      setShow(true);
      setPrevVal(value);
    } else if (value > prevVal) {
      setShow(false);
      setPrevVal(value);
    }
  }, [value, prevVal]);

  return (
    <div className={`top ${show ? "d-block" : "d-none"}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="flat-infomation d-md-block" id="flat-infomation">
              <li className="phone">
                <FaPhoneAlt className="mr-2" />
                Call us:{" "}
                <a title="phone" href="tel:+919831423555" className="mr-1">
                  +91 98314 23555,
                </a>
                <a title="phone" href="tel:+12404815325">
                  +1 240-481-5325
                </a>
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
