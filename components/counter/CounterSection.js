const CounterSection = () => {
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
          <CounterItem />
          <CounterItem />
          <CounterItem />
          <CounterItem />
          <CounterItem />
          <CounterItem />
        </div>
      </div>
    </section>
  );
};

const CounterItem = () => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="iconbox-item mb-0 text-center d-flex flex-column align-items-center justify-content-center">
        <div className="iconbox">
          <div className="box-header">
            <div className="box-title">
              <a className="number">130</a>
            </div>
            <div className="box-title mb-0">
              <a className="title-text">WORKERS EMPLOYED</a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .icon {
          width: 60px;
          height: 60px;
          background-color: #18ba60;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon img {
          width: 25px;
        }
        .iconbox-item {
          background: #fff;
          padding: 15px 20px;
        }
        .number {
          color: #18ba60 !important;
          font-size: 34px;
        }
        .box-title {
          margin-bottom: 0 !important;
        }
        .title-text {
          font-size: 16px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default CounterSection;
