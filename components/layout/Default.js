import Footer from "../footer/Footer";
import Header from "../header/Header";
import WhatsappButton from "../WhatsappButton";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
      <WhatsappButton
        number="+917003860702"
        text="Hi The Digie Books, I went through your website & want to discuss few things with you"
      />
    </>
  );
};

export default Layout;
