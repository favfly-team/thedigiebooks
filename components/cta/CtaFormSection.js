import { useState } from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import Airtable from "airtable";

const CtaFormSection = ({ slice }) => {
  const { image, heading, description1 } = slice?.primary;

  return (
    <section className="flat-row flat-callback">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-5 mb-lg-0">
            <div className="text-block-callback">
              <RichText render={heading} />
              <div className="text-callback-content">
                <RichText render={description1} linkResolver={linkResolver} />
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="flat-callback-form">
              <form
                id="contactform"
                method="post"
                action="./contact/contact-process2.php"
                novalidate="novalidate">
                <div className="flat-field">
                  <div className="field-one-half field-email">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="You Name"
                      required
                    />
                  </div>
                  <div className="field-one-half field-email">
                    <input
                      type="text"
                      id="email"
                      value=""
                      name="email"
                      placeholder="You Email"
                      required
                    />
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="flat-field">
                  <div className="field-one-half field-phone">
                    <input
                      type="text"
                      id="phone"
                      value=""
                      name="phone"
                      placeholder="You phone number"
                      required="required"
                    />
                  </div>
                  <div className="field-one-half field-submit">
                    <button
                      type="submit"
                      name="submit"
                      className="button-submit-field">
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFormSection;
