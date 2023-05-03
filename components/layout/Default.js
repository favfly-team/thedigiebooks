// import Footer from "../footer/Footer";
// import Header from "../header/Header";
import UpArrow from "../UpArrow";
import WhatsappButton from "../WhatsappButton";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <div>{children}</div>
      {/* <Footer /> */}
      <WhatsappButton number="+91" text="Hi" />
      <UpArrow />
    </>
  );
};

export default Layout;
