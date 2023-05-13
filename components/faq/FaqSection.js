import { useState } from "react";
import Heading from "../heading/Heading";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const FaqSection = ({ slice }) => {
  return (
    <section className="flat-row pd-services-post">
      <div className="container">
        <Heading data={slice?.primary} />

        <div className="row">
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
    <div className="col-md-6 mb-4">
      <div className={`faq-container h-100  ${show ? "border" : ""}`}>
        <h6
          className={`faq-title ${show ? "active" : ""}`}
          onClick={() => setShow(!show)}>
          {question?.[0]?.text}
        </h6>
        <div className={`faq-content ${show ? "d-block" : "d-none"}`}>
          <RichText render={answer} linkResolver={linkResolver} />
        </div>
      </div>
      <style jsx>{`
        .faq-title {
          cursor: pointer;
          color: #fff;
          background: #04a0ea;
          padding: 14px 20px 14px 48px;
          position: relative;
          font-weight: 500;
          font-size: 16px;
          border-radius: 0;
          letter-spacing: 0.2px;
        }
        .border {
          border: 1px solid #c4c4c4;
        }
        .faq-title.active:after {
          position: absolute;
          left: 27px;
          top: 16px;
          content: "";
          width: 2px;
          height: 12px;
          background-color: #fff;
        }
        .active {
          margin: -1px -1px 0px -1px;
        }

        .faq-title:before {
          position: absolute;
          left: 22px;
          top: 21px;
          content: "";
          width: 12px;
          height: 2px;
          background-color: #fff;
        }
        .faq-content {
          padding: 15px 21px 12px 21px;
        }
      `}</style>
    </div>
  );
};
export default FaqSection;
