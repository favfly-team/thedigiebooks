import Link from "next/link";
import HeaderTop from "./HeaderTop";
import TopBar from "./TopBar";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  // useEffect(() => {
  //   window.addEventListener("scroll", function () {
  //     const header = document.getElementById("rs-header");
  //     setScrollValue(window.scrollY);
  //     if (window.scrollY > 150) {
  //       header.classList.add("sticky");
  //     } else {
  //       header.classList.remove("sticky");
  //     }
  //   });
  // }, []);

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
    <>
      <TopBar />
      <HeaderTop />
      <div style={{ position: "sticky", top: "0", zIndex: "9999" }}>
        <header id="header" className="header bg-color style2">
          <div className="container">
            <div className="row justify-content-between justify-content-lg-center">
              <div className="header-wrap">
                <div className="col-md-12">
                  <div className="nav-wrap">
                    <div
                      className="btn-menu"
                      onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <span></span>
                    </div>

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
              {/* <SearchBar /> */}
            </div>
          </div>
        </header>
        <nav
          id="mainnav-mobi"
          className={`mainnav d-lg-none ${showMobileMenu ? "" : "d-none"}`}>
          <ul className="menu">
            {navItems?.map((item, index) => (
              <NavItem key={index} data={item} />
            ))}
          </ul>
        </nav>
      </div>
    </>
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
