const AboutSection = () => {
  return (
    <div className="pd-imagebox">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="title-section s1">
              <h2>Why choose us?</h2>
              <div className="sub-title-section details">
                <p>
                  We led the charge in transitioning manual accounting methods
                  to automated processes by implementing electronic workflow
                  solutions into our business and outsourcing services. While
                  many finance and accounting outsourcing firms claim to be
                  innovative, they’re years behind in providing the systems and
                  best practices we’ve been developing and delivering to clients
                  for over a decade. We’re more than accountants, we’re trusted
                  advisors.
                </p>
                <ul>
                  <li>Expert team of professionals</li>
                  <li>Confidentiality & Reasonable charges</li>
                  <li>Timely Delivery of services</li>
                  <li>Wide range of services under one roof</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              className="w-100"
              src="https://themesflat.co/html/finance/images/stage/image-03.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
