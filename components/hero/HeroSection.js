import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const HeroSection = () => {
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
      <SplideSlide>
        <HeroItem />
      </SplideSlide>
      <SplideSlide>
        <HeroItem />
      </SplideSlide>
      <SplideSlide>
        <HeroItem />
      </SplideSlide>
    </Splide>
  );
};

const HeroItem = () => {
  return (
    <>
      <div className="hero-container">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12">
              <div className="text-container">
                <h1>We Help businesses grow and innovate</h1>
                <p>
                  We combine a team of experienced finance, accounting, tax and
                  HR professionals with our leading-edge workflow technology
                  that streamlines process and delivers an unprecedented view of
                  your company’s performance.
                </p>
                <div className="mt-4">
                  <a href="" className="btn-primary mr-3">
                    Our Company
                  </a>
                  <a href="" className="btn-secondary">
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-container {
          background-image: url("https://themesflat.co/html/finance/images/slides/slide1.png");
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
          opacity: 0.5;
        }
        .text-container {
          max-width: 700px;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
