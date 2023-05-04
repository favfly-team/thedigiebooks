import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import lozad from "lozad";
import { useEffect } from "react";
import Heading from "../heading/Heading";

const ClientsSection = ({ slice }) => {
  return (
    <section className="flat-row pd-imagebox">
      <div className="container">
        <Heading data={slice?.primary} />

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
          {slice?.items?.map((item, index) => (
            <SplideSlide key={index}>
              <ClientItem data={item} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

const ClientItem = ({ data }) => {
  const { image } = data;

  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, []);

  return <img className="w-100 lozad" src={image?.url} alt={image?.alt} />;
};
export default ClientsSection;
