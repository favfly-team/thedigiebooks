const CtaFormSection = () => {
  return (
    <section className="flat-row flat-callback">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-5 mb-lg-0">
            <div className="text-block-callback">
              <h2>Get a Call Back</h2>
              <div className="text-callback-content">
                If you need to speak to us about a general query fill in the
                form below and we will call you back within the same working
                day.
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
