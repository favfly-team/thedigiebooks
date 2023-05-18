import { useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import lozad from "lozad";

const FeaturesSection = ({ slice }) => {
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
            <FeatureItem key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ data }) => {
  const { icon, title1, details } = data;

  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, [icon?.url]);

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="iconbox-item mb-0 d-flex">
        {icon?.url && (
          <div className="icon">
            <img className="lozad" data-src={icon?.url} alt={icon?.alt} />
          </div>
        )}
        <div className="iconbox">
          <div className="box-header">
            <div className="box-title">
              <a>{title1?.[0]?.text}</a>
            </div>
          </div>
          <div className="box-content">
            <RichText render={details} linkResolver={linkResolver} />
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
