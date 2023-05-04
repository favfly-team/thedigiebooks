import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/router";

const SecondaryHeroSection = () => {
  const router = useRouter();

  return (
    <>
      <div className="hero-container">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12">
              <div className="text-container text-container-secondary">
                <h1>We Help businesses grow and innovate</h1>
                <p>
                  We combine a team of experienced finance, accounting, tax and
                  HR professionals with our leading-edge workflow technology
                  that streamlines process and delivers an unprecedented view of
                  your company’s performance.
                </p>
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
          background-image: url("https://themesflat.co/html/finance/images/slides/slide1.png");
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
        .text-container-secondary {
          max-width: 800px;
          margin: 0 auto;
        }
        .text-container-secondary h1 {
          text-align: center;
          font-size: 40px;
        }
        .text-container-secondary p {
          text-align: center;
          font-size: 16px;
        }
        @media (max-width: 591px) {
          .text-container-secondary h1 {
            font-size: 30px;
          }
          .text-container-secondary p {
            text-align: center;
            font-size: 14px;
          }
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
