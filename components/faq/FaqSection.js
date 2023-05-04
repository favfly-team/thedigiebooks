import { useState } from "react";
import Heading from "../heading/Heading";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const FaqSection = ({ slice }) => {
  return (
    <section className="flat-row pd-services-post">
      <div className="container">
        <Heading data={slice?.primary} />

        <div className="row flat-accordion style">
          {slice?.items?.map((item, index) => (
            <FaqItem key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ data }) => {
  const [show, setShow] = useState(true);
  const { question, answer } = data;

  return (
    <div className="col-md-6">
      <div className="flat-toggle">
        <h6
          className={`toggle-title ${show ? "active" : ""}`}
          onClick={() => setShow(!show)}>
          {question?.[0]?.text}
        </h6>
        <div className={`toggle-content ${show ? "d-block" : "d-none"}`}>
          <RichText render={answer} linkResolver={linkResolver} />
        </div>
      </div>
    </div>
  );
};
export default FaqSection;
