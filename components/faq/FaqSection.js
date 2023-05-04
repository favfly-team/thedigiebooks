import { useState } from "react";

const FaqSection = () => {
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

        <div className="row flat-accordion style">
          <FaqItem />
          <FaqItem />
          <FaqItem />
          <FaqItem />
          <FaqItem />
          <FaqItem />
        </div>
      </div>
    </section>
  );
};

const FaqItem = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="col-md-6">
      <div className="flat-toggle">
        <h6
          className={`toggle-title ${show ? "active" : ""}`}
          onClick={() => setShow(!show)}>
          Strategy Development
        </h6>
        <div className={`toggle-content ${show ? "d-block" : "d-none"}`}>
          <p>
            Good strategy is the antidote to competition. Strategic thinking is
            the process of developing a strategy that defines your value
            proposition and your unique value chain. This process includes
            market and competitive research as well as an assessment of the
            company’s capabilities and the industry forces impacting it.
          </p>
        </div>
      </div>
    </div>
  );
};
export default FaqSection;
