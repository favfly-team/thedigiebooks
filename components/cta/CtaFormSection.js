import { useState } from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const CtaFormSection = ({ slice }) => {
  const { heading, description1 } = slice?.primary;

  const [formData, setFormData] = useState({
    businessName: "",
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await base("Bookings").create([
        {
          fields: {
            "Business Name": formData.businessName,
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,

            Source: location.href,
            Status: "Todo",
          },
        },
      ]);

      // console.log(data);

      setFormData({
        businessName: "",
        name: "",
        email: "",
        phone: "",
      });
      setSuccess(true);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <section className="flat-row flat-callback">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-5 mb-lg-0">
            <div className="text-block-callback">
              <h2>{heading?.[0]?.text}</h2>
              <div className="text-callback-content">
                <RichText render={description1} linkResolver={linkResolver} />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="flat-callback-form">
              <form onSubmit={handleSubmit}>
                <div className="flat-field">
                  <div className="field-one-half field-email">
                    <input
                      type="text"
                      name="businessName"
                      placeholder="Business Name"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field-one-half field-email">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="flat-field">
                  <div className="field-one-half field-phone">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field-one-half field-phone">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field-submit">
                    <button
                      type="submit"
                      name="submit"
                      className="button-submit-field">
                      {loading ? "Please wait..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {error && (
              <p
                className="text-danger text-center mt-3 h5"
                style={{ fontSize: "18px" }}>
                {error.message}
              </p>
            )}
            {success && (
              <p
                className="text-success text-center mt-3 h5"
                style={{ fontSize: "18px" }}>
                Thanks, we will contact you soon.
              </p>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .button-submit-field {
          margin: 0 10px;
        }
      `}</style>
    </section>
  );
};

export default CtaFormSection;
