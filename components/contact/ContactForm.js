const ContactForm = () => {
  return (
    <form className="form-info row">
      <div className="input-info col-sm-6">
        <input
          type="text"
          name="name"
          id="name"
          value=""
          placeholder="Name"
          required="required"
        />
      </div>
      <div className="input-info col-sm-6">
        <input
          type="email"
          name="email"
          id="email"
          value=""
          placeholder="Email"
          required="required"
        />
      </div>
      <div className="input-info col-12">
        <input
          type="text"
          name="subject"
          id="subject"
          value=""
          placeholder="Subject"
          required="required"
        />
        <textarea
          id="message-contact"
          name="message"
          placeholder="Message"
          required="required"></textarea>
      </div>
      <div className="input-info col-12">
        <button type="submit" className="submit">
          Send Message
        </button>
      </div>
      <style jsx>{`
        textarea {
          height: 100px;
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
