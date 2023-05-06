import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import { DocLink } from "../../utils/prismicHelpers";

const HeroSection = ({ slice }) => {
  return (
    <Splide
      options={{
        type: "fade",
        perPage: 1,
        perMove: 1,
        gap: "0px",
        arrows: false,
        pagination: true,
        autoplay: true,
        interval: 2000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        rewind: true,
      }}>
      {slice?.items?.map((item, index) => (
        <SplideSlide key={index}>
          <HeroItem data={item} textData={slice?.primary} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

const HeroItem = ({ data, textData }) => {
  const {
    button_link1,
    button_text1,
    button_link2,
    button_text2,
    heading,
    description1,
  } = textData;

  return (
    <>
      <div className="hero-container">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12">
              <div className="text-container">
                {heading?.[0]?.text && <h1>{heading?.[0]?.text}</h1>}
                <RichText render={description1} linkResolver={linkResolver} />
                <div className="mt-4">
                  {button_text1?.[0]?.text && (
                    <DocLink link={button_link1}>
                      <span className="btn-primary mr-3">
                        {button_text1?.[0]?.text}
                      </span>
                    </DocLink>
                  )}
                  {button_text2?.[0]?.text && (
                    <DocLink link={button_link2}>
                      <span className="btn-secondary">
                        {button_text2?.[0]?.text}
                      </span>
                    </DocLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-container {
          background-image: url(${data?.image?.url});
          height: 70vh;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
        .hero-container:before {
          content: "";
          background-color: #000;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.4;
        }
        .text-container {
          max-width: 700px;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
