import { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import lozad from "lozad";
import { DocLink } from "../../utils/prismicHelpers";

const AboutSection = ({ slice }) => {
  const { button_link, button_text, description1, heading, image } =
    slice?.primary;

  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, []);

  return (
    <div className="pd-imagebox">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="title-section s1">
              {heading?.[0]?.text && <RichText render={heading} />}
              <div className="sub-title-section details">
                <RichText render={description1} linkResolver={linkResolver} />
              </div>
              {button_text?.[0]?.text && (
                <DocLink link={button_link}>
                  <span className="btn-primary mt-3">
                    {button_text?.[0]?.text}
                  </span>
                </DocLink>
              )}
            </div>
          </div>
          {image?.url && (
            <div className="col-lg-6">
              <img
                key={image?.url}
                className="lozad w-100"
                data-src={image?.url}
                alt={image?.alt}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
