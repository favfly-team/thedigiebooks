import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const SecondaryHeroSection = ({ slice }) => {
  const router = useRouter();

  const { heading, description1, image } = slice?.primary;

  return (
    <>
      <div className="hero-container">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12">
              <div className="text-container text-container-secondary">
                <h1>{heading?.[0]?.text}</h1>
                <RichText render={description1} linkResolver={linkResolver} />
                <ul className="breadcrumbs text-center">
                  <li>
                    <Link href="/">
                      Home
                      <i>
                        <FaAngleRight />
                      </i>
                    </Link>
                  </li>
                  {router.query.slug ? (
                    <li>{router.query.slug}</li>
                  ) : (
                    <li>{router?.pathname?.replaceAll("/", "")}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-container {
          background-image: url(${image?.url});
          height: 50vh;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }
        .hero-container:before {
          content: "";
          background-color: #000;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.5;
        }

        .text-container-secondary .breadcrumbs li {
          display: inline-block;
          line-height: 38px;
        }
      `}</style>
    </>
  );
};

export default SecondaryHeroSection;
