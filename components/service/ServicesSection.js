import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="flat-row pd-services-post">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-section center s1 mb-4">
              <h2>What We Can Offer You </h2>
              <p className="sub-title-section">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                <br />
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="wrap-imagebox-grid">
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
              <ServiceItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceItem = () => {
  return (
    <div className="flat-imagebox services-grid item mb-5">
      <div className="flat-imagebox-inner">
        <div className="flat-imagebox-image">
          <img
            className="w-100"
            src="https://themesflat.co/html/finance/images/imagebox/04.jpg"
            alt="img"
          />
        </div>
        <div className="flat-imagebox-header">
          <h3 className="flat-imagebox-title">
            <a href="#">Mutual Funds</a>
          </h3>
        </div>
        <div className="flat-imagebox-content">
          <div className="flat-imagebox-desc">
            <p>
              Mutual funds pool money from many investors to purchase broad
              range of investments, such as stocks.
            </p>
          </div>
          <div className="flat-imagebox-button mt-0">
            <Link href="/service-page">
              Read More
              <FaAngleRight className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
