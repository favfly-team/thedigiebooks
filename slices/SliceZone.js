import { HeroSection } from "./";

const SliceZone = ({ sliceZone }) => (
  <>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case "hero_section":
          return <HeroSection slice={slice} key={`slice-${index}`} />;

        default:
          return null;
      }
    })}
  </>
);

export default SliceZone;
