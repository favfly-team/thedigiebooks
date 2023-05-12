import { FaAngleRight } from "react-icons/fa";
import Heading from "../heading/Heading";
import { useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import lozad from "lozad";
import { DocLink } from "../../utils/prismicHelpers";

const ServicesSection = ({ slice }) => {
  return (
    <section className="flat-row pd-services-post">
      <div className="container">
        <Heading data={slice?.primary} />

        <div className="row">
          {slice?.items?.map((item, index) => (
            <ServiceItem key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ data }) => {
  const { title1, details, image, button_link } = data;

  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, []);

  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-4 mb-5">
        <div className="service-box shadow-sm px-3 h-100">
          {image?.url && (
            <img
              key={image?.url}
              className="lozad w-100"
              data-src={image?.url}
              alt={image?.alt}
            />
          )}
          <div className="text-content pt-4 pb-2">
            <h3 className="service-title">
              <DocLink link={button_link}>{title1?.[0]?.text}</DocLink>
            </h3>
            <RichText render={details} linkResolver={linkResolver} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .service-title {
          text-transform: capitalize;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #222;
        }
      `}</style>
    </>
  );
};

export default ServicesSection;
