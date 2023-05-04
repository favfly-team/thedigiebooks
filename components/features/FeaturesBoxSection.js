const FeaturesBoxSection = () => {
  return (
    <section className="flat-row pd-services-post">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-section center s1 mb-4">
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
          <FeaturesBoxItem />
          <FeaturesBoxItem />
          <FeaturesBoxItem />
          <FeaturesBoxItem />
          <FeaturesBoxItem />
          <FeaturesBoxItem />
        </div>
      </div>
    </section>
  );
};

const FeaturesBoxItem = () => {
  return (
    <>
      <div className="col-md-6 col-lg-4 mb-4">
        <article className="entry">
          <div className="content-post">
            <div className="position">Accounting Software</div>
            <h3 className="title-post">QuickBooks Accounting Software</h3>
            <div className="entry-post">
              <p>
                We make use of QuickBooks bookkeeping services, an accounting
                software package developed by Intuit to carry out our tasks and
                to optimize our services. QuickBooks Pro Accountant Book Keeper
                and Quickbooks Online Bookkeeping services help facilitate
                smooth functioning and execution of our services to yield the
                best results. It assists in managing accounting books, managing
                and paying bills, sending invoices and complete payroll.
              </p>
            </div>
          </div>
        </article>
      </div>
      <style jsx>{`
        .entry {
          background-color: #f7f7f7;
          padding: 15px 20px;
          transition: all 0.3s ease-in-out;
        }
        .entry:hover {
          margin-top: -3px;
          background-color: #ffffff;
          box-shadow: 0 0 15px #ddd;
        }
      `}</style>
    </>
  );
};

export default FeaturesBoxSection;
