import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const Heading = ({ data }) => {
  const { heading, description1 } = data;
  return (
    <div className="row">
      {heading?.[0]?.text && (
        <div className="col-md-10 col-lg-8 mx-auto">
          <div className="title-section center s1 mb-5">
            <RichText render={heading} />
            <div className="sub-title-section">
              <RichText render={description1} linkResolver={linkResolver} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Heading;
