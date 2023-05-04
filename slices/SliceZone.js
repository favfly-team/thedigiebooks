import {
  HeroSection,
  SecondaryHeroSection,
  AboutSection,
  BlogsSection,
  ClientsSection,
  CounterSection,
  CtaSection,
  FaqSection,
  FeaturesSection,
  ServicesSection,
  SliderServicesSection,
  DetailsSection,
  FeaturesBoxSection,
  ContactSection,
  CtaFormSection,
} from "./";

const SliceZone = ({ sliceZone, blogsData }) => (
  <>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case "hero_section":
          return <HeroSection slice={slice} key={`slice-${index}`} />;
        case "secondary_hero_section":
          return <SecondaryHeroSection slice={slice} key={`slice-${index}`} />;
        case "about_section":
          return <AboutSection slice={slice} key={`slice-${index}`} />;
        case "blogs_section":
          return (
            <BlogsSection
              slice={slice}
              key={`slice-${index}`}
              blogsData={blogsData}
            />
          );
        case "clients_section":
          return <ClientsSection slice={slice} key={`slice-${index}`} />;
        case "counter_section":
          return <CounterSection slice={slice} key={`slice-${index}`} />;
        case "cta_section":
          return <CtaSection slice={slice} key={`slice-${index}`} />;
        case "faq_section":
          return <FaqSection slice={slice} key={`slice-${index}`} />;
        case "features_section":
          return <FeaturesSection slice={slice} key={`slice-${index}`} />;
        case "services_section":
          return <ServicesSection slice={slice} key={`slice-${index}`} />;
        case "slider_services_section":
          return <SliderServicesSection slice={slice} key={`slice-${index}`} />;
        case "details_section":
          return <DetailsSection slice={slice} key={`slice-${index}`} />;
        case "features_box_section":
          return <FeaturesBoxSection slice={slice} key={`slice-${index}`} />;
        case "contact_section":
          return <ContactSection slice={slice} key={`slice-${index}`} />;
        case "cta_form_section":
          return <CtaFormSection slice={slice} key={`slice-${index}`} />;

        default:
          return null;
      }
    })}
  </>
);

export default SliceZone;
