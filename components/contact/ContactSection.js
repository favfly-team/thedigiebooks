import ContactForm from "./ContactForm";
import Heading from "../heading/Heading";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import { FaLinkedinIn } from "react-icons/fa";

const ContactSection = ({ slice }) => {
  const { address, email, phone, linkedin_link, map_link } = slice.primary;

  return (
    <section className="flat-row pd-contact-v1">
      <div className="container">
        <Heading data={slice?.primary} />
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <div className="info info-address">
                <div className="title">Address</div>
                <RichText render={address} linkResolver={linkResolver} />
              </div>

              <div className="info info-address">
                <div className="title">Phone number</div>
                <RichText render={phone} linkResolver={linkResolver} />
              </div>

              <div className="info info-address">
                <div className="title">E-mail address</div>
                <RichText render={email} linkResolver={linkResolver} />
              </div>
              <div className="info info-address">
                <div className="title">Follow us</div>
                <div className="d-flex">
                  <a href={linkedin_link?.url} target="_blank" rel="noreferrer">
                    <i className="icon-bg">
                      <FaLinkedinIn />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="flat-form-info">
              <ContactForm />
            </div>
          </div>
        </div>
        {map_link?.url && (
          <div className="map mt-4">
            <iframe
              src={map_link?.url}
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        )}
      </div>
      <style jsx>{`
        .map iframe {
          width: 100%;
          height: 400px;
        }
        .icon-bg {
          width: 30px;
          height: 30px;
          background-color: #18ba60;
          border-radius: 50%;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .contact-info .info {
          margin-bottom: 25px;
        }
        .contact-info .info .title {
          margin-bottom: 4px;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
