import { useEffect } from "react";

const UpArrow = () => {
  useEffect(() => {
    window.onscroll = function () {
      const header = document.getElementById("scrollUp");
      if (!header) return;
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        header.classList.add("d-block");
      } else {
        header.classList.remove("d-block");
      }
    };
  }, []);

  return (
    <>
      <a href="#" id="scrollUp">
        <i className="fa fa-angle-up"></i>
      </a>
      <style jsx>{`
        #scrollUp {
          bottom: 30px;
          left: 10px;
          right: auto;
        }
      `}</style>
    </>
  );
};

export default UpArrow;
