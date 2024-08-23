import Link from "next/link";
// import HeaderTop from "./HeaderTop";
import TopBar from "./TopBar";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const header = document.getElementById("headerMain");

      if (window.scrollY > 150) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }, []);

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrollValue(window.scrollY);
    });
  }, []);

  // const logoSrc = "/assets/img/logo.png";

  const navItems = [
    { title: "Home", url: "/", dropdown: null },
    { title: "About", url: "/about", dropdown: null },
    { title: "Services", url: "/services", dropdown: null },
    { title: "Why Us", url: "/why-us", dropdown: null },
    { title: "Partners", url: "/partners", dropdown: null },
    { title: "Contact Us", url: "/contact", dropdown: null },
    { title: "Blog", url: "/blogs", dropdown: null },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setShowMobileMenu(false);
  }, [router]);

  return (
    <div id="headerMain">
      <TopBar value={scrollValue} />
      {/* <HeaderTop /> */}
      <div>
        <header id="header" className="header bg-color style2">
          <div className="container">
            <div className="row justify-content-between justify-content-lg-center w-100">
              <div className="header-wrap w-100">
                <div className="col-md-12">
                  <div className="nav-wrap w-100">
                    <div
                      className="btn-menu"
                      onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                      <span></span>
                    </div>

                    <div className="navItem">
                      <Link href="/">
                        <img
                          className="logo-image"
                          src="https://images.prismic.io/thedigiebooks/ZshTFUaF0TcGJWav_Digiebookslogo.png?auto=format,compress"
                          alt="Logo"
                        />
                      </Link>

                      <nav id="mainnav" className="mainnav">
                        <ul className="menu">
                          {navItems?.map((item, index) => (
                            <NavItem key={index} data={item} />
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              {/* <SearchBar /> */}
            </div>
          </div>
        </header>
        <nav
          id="mainnav-mobi"
          className={`mainnav d-lg-none ${showMobileMenu ? "" : "d-none"}`}
        >
          <ul className="menu">
            {navItems?.map((item, index) => (
              <NavItem key={index} data={item} />
            ))}
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .sticky {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
        }
        .logo-image {
          height: 60px;
          margin-right: 40px;
        }

        .navItem {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .appointment {
          background-color: #18ba60;
          font-size: 14px;
          padding: 11px 27px 12px 27px;
          font-weight: 600;
          letter-spacing: 0;
        }

        @media (max-width: 991px) {
          .navItem {
            justify-content: flex-start;
          }
          .logo-image {
            position: absolute;
            top: -24px;
            left: 50%;
            transform: translateX(-50%);
            margin-left: 30px;
          }
        }
      `}</style>
    </div>
  );
};

const NavItem = ({ data }) => {
  const { title, url, dropdown } = data;
  const router = useRouter();

  return (
    <li>
      <Link href={url} className={router.pathname == url ? "active-nav" : ""}>
        {title}
        {dropdown && (
          <i className="ml-2">
            <FaChevronDown />
          </i>
        )}
      </Link>
      {dropdown && (
        <ul className="sub-menu">
          {dropdown?.map((item, index) => (
            <li key={index}>
              <Link href={item?.url}>{item?.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Header;
