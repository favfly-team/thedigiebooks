import Heading from "../heading/Heading";
import { DocLink } from "../../utils/prismicHelpers";

const CtaSection = ({ slice }) => {
  return (
    <>
      <section className="flat-row pd-services-post">
        <div className="container">
          <Heading data={slice?.primary} />
          <div className="text-center">
            {slice?.primary?.button_text?.[0]?.text && (
              <DocLink link={slice?.primary?.button_link}>
                <span className="btn-primary mr-3">
                  {slice?.primary?.button_text?.[0]?.text}
                </span>
              </DocLink>
            )}
          </div>
        </div>
      </section>
      <style jsx>{`
        .flat-row {
          background: #f7f7f7;
        }
      `}</style>
    </>
  );
};

export default CtaSection;
