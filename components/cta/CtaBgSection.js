import { RichText } from "prismic-reactjs";
import { DocLink } from "../../utils/prismicHelpers";

const CtaBgSection = ({ slice }) => {
  const { heading, button_text, button_link } = slice?.primary;

  return (
    <section className="flat-row flat-callback">
      <div className="container">
        <div
          className="text-block-callback"
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "auto",
          }}>
          <RichText render={heading} />
          {button_text?.[0]?.text && (
            <DocLink link={button_link}>
              <span className="btn-primary">{button_text?.[0]?.text}</span>
            </DocLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaBgSection;
