import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterSection = ({ slice }) => {
  return (
    <section className="flat-row flat-iconbox bg-theme">
      <div className="container">
        {slice?.primary?.heading?.[0]?.text && (
          <div className="row">
            <div className="col-md-12">
              <div className="title-section left">
                <h2>{slice?.primary?.heading?.[0]?.text}</h2>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          {slice?.items?.map((item, index) => (
            <CounterItem key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CounterItem = ({ data }) => {
  const { number, title1 } = data;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="iconbox-item mb-0 text-center d-flex flex-column align-items-center justify-content-center">
        <div className="iconbox">
          <div className="box-header">
            <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
              {({ isVisible }) => (
                <div className="box-title">
                  {" "}
                  <a className="number">
                    {isVisible ? (
                      <CountUp
                        start={0}
                        end={parseInt(number?.[0]?.text, 10)}
                        duration={3}
                      />
                    ) : null}
                    +
                  </a>
                </div>
              )}
            </VisibilitySensor>

            {title1?.[0]?.text && (
              <div className="box-title mb-0">
                <a className="title-text">{title1?.[0]?.text}</a>
              </div>
            )}
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
