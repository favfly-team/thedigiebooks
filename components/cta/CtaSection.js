const CtaSection = () => {
  return (
    <>
      <section className="flat-row pd-services-post">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
              <div className="title-section center s1 mb-4">
                <h2>What We Can Offer You </h2>
                <p className="sub-title-section">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="text-center">
                <a href="" className="btn-primary mr-3">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .flat-row {
          background: #f7f7f7;
        }
      `}</style>
    </>
  );
};

export default CtaSection;
