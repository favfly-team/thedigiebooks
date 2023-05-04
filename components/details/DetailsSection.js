import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const DetailsSection = ({ slice }) => {
  const { details } = slice?.primary;

  return (
    <div className="pd-imagebox">
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="wrap-main-post about-v3">
              <div className="flexslider s2 mb-0">
                <div className="blog-content box-content">
                  <RichText render={details} linkResolver={linkResolver} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
