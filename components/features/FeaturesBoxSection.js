import Heading from "../heading/Heading";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const FeaturesBoxSection = ({ slice }) => {
  return (
    <section className="flat-row pd-services-post">
      <div className="container">
        <Heading data={slice?.primary} />
        <div className="row">
          {slice?.items?.map((item, index) => (
            <FeatureBoxItem key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureBoxItem = ({ data }) => {
  const { details, title1, subheading } = data;
  return (
    <>
      <div className="col-md-6 col-lg-4 mb-4">
        <article className="entry h-100">
          <div className="content-post">
            <div className="position">{subheading?.[0]?.text}</div>
            <h3 className="title-post">{title1?.[0]?.text}</h3>
            <div className="entry-post">
              <RichText render={details} linkResolver={linkResolver} />
            </div>
          </div>
        </article>
      </div>
      <style jsx>{`
        .entry {
          background-color: #f7f7f7;
          padding: 15px 20px;
          transition: all 0.3s ease-in-out;
        }
        .entry:hover {
          margin-top: -3px;
          background-color: #ffffff;
          box-shadow: 0 0 15px #ddd;
        }
      `}</style>
    </>
  );
};

export default FeaturesBoxSection;
