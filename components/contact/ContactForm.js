import Airtable from "airtable";
import { useState } from "react";

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const ContactForm = () => {
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
    <form onSubmit={handleSubmit} className="form-info row">
      <div className="input-info col-sm-6">
        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-info col-sm-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-info col-sm-6">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-info col-sm-6">
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-info col-12">
        <button type="submit" className="submit">
          {loading ? "Please wait..." : "Submit"}
        </button>
      </div>
      {error && (
        <div className="col-lg-12 col-md-12 col-sm-12 mt-3 mb-0 w-100">
          <p
            className="text-danger text-center h5"
            style={{ fontSize: "18px" }}>
            {error.message}
          </p>
        </div>
      )}
      {success && (
        <div className="col-lg-12 col-md-12 col-sm-12 mt-3 mb-0 w-100">
          <p
            className="text-success text-center h5"
            style={{ fontSize: "18px" }}>
            Thanks, we will contact you soon.
          </p>
        </div>
      )}
      <style jsx>{`
        textarea {
          height: 100px;
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
