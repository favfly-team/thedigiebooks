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
          <div className="col-md-12">
            <div className="wrap-imagebox-grid">
              {slice?.items?.map((item, index) => (
                <ServiceItem key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ data }) => {
  const { title1, details, image, button_link, button_text } = data;

  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, []);

  return (
    <div className="flat-imagebox services-grid item mb-5">
      <div className="flat-imagebox-inner">
        {image?.url && (
          <div className="flat-imagebox-image">
            <img
              key={image?.url}
              className="lozad w-100"
              data-src={image?.url}
              alt={image?.alt}
            />
          </div>
        )}
        <div className="flat-imagebox-header">
          <h3 className="flat-imagebox-title">
            <DocLink link={button_link}>{title1?.[0]?.text}</DocLink>
          </h3>
        </div>
        <div className="flat-imagebox-content">
          <div className="flat-imagebox-desc">
            <RichText render={details} linkResolver={linkResolver} />
          </div>
          <div className="flat-imagebox-button mt-0">
            {button_text?.[0]?.text && (
              <DocLink link={button_link}>
                <span>
                  {button_text?.[0]?.text}
                  <FaAngleRight className="ml-1" />
                </span>
              </DocLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
