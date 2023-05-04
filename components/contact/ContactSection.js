import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="flat-row pd-contact-v1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-section center s1 mb-5">
              <h2>What We Can Offer You </h2>
              <p className="sub-title-section">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                <br />
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <div className="info info-address">
                <div className="title">Address</div>
                <p className="mb-2">
                  India : 25/1, Baranashi Ghosh Street Kolkata 700007, India
                </p>
                <p>Usa: 2010 Baltimore Road, Suite F42 Rockville, MD 20851</p>
              </div>

              <div className="info info-address">
                <div className="title">Phone number</div>
                <p className="mb-2">India : +91 7003860702</p>
                <p>Usa : (240) 481-5325</p>
              </div>

              <div className="info info-address">
                <div className="title">E-mail address</div>
                <p>hello@thedigiebooks.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="flat-form-info">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="map mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7367.702719230003!2d88.36208!3d22.584662000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b4d8697633%3A0x953643d91cd0a131!2s25%2C%201%2C%20Baranashi%20Ghosh%20Rd%2C%20near%20Girish%2C%20Raja%20Katra%2C%20Singhi%20Bagan%2C%20Park%20Street%20area%2C%20Kolkata%2C%20West%20Bengal%20700007!5e0!3m2!1sen!2sin!4v1683176626273!5m2!1sen!2sin"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <style jsx>{`
        .map iframe {
          width: 100%;
          height: 400px;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
