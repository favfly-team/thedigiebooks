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
                <a href="%2b61383766284.html" title="phone">
                  +61 3 8376 6284
                </a>
              </li>
              <li className="email">
                <FaEnvelope className="mr-2" />
                Email:{" "}
                <a href="mailto:support24-7@gmail.com" title="email">
                  support24-7@gmail.com
                </a>
              </li>
            </ul>
            <div className="flat-questions">
              {/* <a href="#" title="" className="questions">
                Have any questions?
              </a> */}
              <a href="#" className="appointment">
                Contact Us
              </a>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
