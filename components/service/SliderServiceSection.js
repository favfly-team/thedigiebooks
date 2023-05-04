import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SliderServiceSection = () => {
  return (
    <section className="flat-row pd-imagebox">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <div className="title-section center s1 mb-4">
              <h2>What We Can Offer You </h2>
              <p className="sub-title-section">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

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
          <SplideSlide>
            <SliderServiceItem />
          </SplideSlide>
          <SplideSlide>
            <SliderServiceItem />
          </SplideSlide>
          <SplideSlide>
            <SliderServiceItem />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

const SliderServiceItem = () => {
  return (
    <div className="imagebox-item">
      <div className="imagebox style1">
        <div className="imagebox-image">
          <img
            src="https://www.thedigiebooks.com/images/portfolio/10.jpg"
            alt=""
          />
        </div>

        <div className="imagebox-title">
          <h3>
            <a href="#" title="">
              Payroll
            </a>
          </h3>
        </div>
        <div className="imagebox-content">
          <div className="imagebox-desc">
            Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium
            doloremque lau dantium, rem aperiam eaque ipsa ab illo inventore
            veritatis
          </div>
          <div className="imagebox-button">
            <a href="#" title="">
              read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderServiceSection;
