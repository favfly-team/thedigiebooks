import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Heading from "../heading/Heading";
import { useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import lozad from "lozad";
import { DocLink } from "../../utils/prismicHelpers";

const SliderServicesSection = ({ slice }) => {
  return (
    <section className="flat-row pd-imagebox">
      <div className="container">
        <Heading data={slice?.primary} />

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "1rem",
            arrows: true,
            pagination: true,
            autoplay: true,
            interval: 2000,
            speed: 1000,
            rewind: true,
            breakpoints: {
              787: {
                perPage: 2,
              },
              591: {
                perPage: 1,
              },
            },
          }}>
          {slice?.items?.map((item, index) => (
            <SplideSlide key={index}>
              <SliderServiceItem data={item} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

const SliderServiceItem = ({ data }) => {
  const { title1, details, image, button_link, button_text } = data;

  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, []);

  return (
    <div className="imagebox-item">
      <div className="imagebox style1">
        {image?.url && (
          <div className="imagebox-image">
            <img
              key={image?.url}
              className="lozad w-100"
              data-src={image?.url}
              alt={image?.alt}
            />
          </div>
        )}

        <div className="imagebox-title">
          <h3>
            <a>{title1?.[0]?.text}</a>
          </h3>
        </div>
        <div className="imagebox-content">
          <div className="imagebox-desc">
            <RichText render={details} linkResolver={linkResolver} />
          </div>
          <div className="imagebox-button">
            {button_text?.[0]?.text && (
              <DocLink link={button_link}>
                <span>{button_text?.[0]?.text}</span>
              </DocLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderServicesSection;
