const FeaturesSection = () => {
  return (
    <section className="flat-row flat-iconbox bg-theme">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-section left">
              <h2>Our Services</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = () => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="iconbox-item mb-0 d-flex">
        <div className="icon">
          <img src="https://i.ibb.co/2SCvcTP/process.png" alt="" />
        </div>
        <div className="iconbox">
          <div className="box-header">
            <div className="box-title">
              <a>Accounting and bookkeeping</a>
            </div>
          </div>
          <div className="box-content">
            <p>
              Get rid of those low-margin and time-consuming activities; and
              make time to focus on practice areas that are more profitable.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .icon {
          width: 60px;
          height: 60px;
          min-width: 60px;
          margin-right: 15px;
          background-color: #18ba60;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon img {
          width: 25px;
        }
      `}</style>
    </div>
  );
};

export default FeaturesSection;
