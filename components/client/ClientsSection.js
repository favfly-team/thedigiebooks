import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ClientsSection = () => {
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
            perPage: 5,
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
                perPage: 3,
              },
              591: {
                perPage: 2,
              },
            },
          }}>
          <SplideSlide>
            <ClientItem />
          </SplideSlide>
          <SplideSlide>
            <ClientItem />
          </SplideSlide>
          <SplideSlide>
            <ClientItem />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

const ClientItem = () => {
  return (
    <img
      className="w-100"
      src="https://www.thedigiebooks.com/images/partner/15.png"
      alt=""
    />
  );
};
export default ClientsSection;
