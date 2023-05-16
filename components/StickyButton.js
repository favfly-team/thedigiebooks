import Link from "next/link";

const StickyButton = () => {
  return (
    <>
      <Link href="/contact">
        <span className="sticky-btn">Start your free trial</span>
      </Link>

      <style jsx>{`
        .sticky-btn {
          background: #25d366;
          color: white;
          position: fixed;
          z-index: 999;
          bottom: 20px;
          right: 10px;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          height: auto;
          padding: 12px 15px;
          text-decoration: none;
          border-radius: 50px;
          animation-name: pulse;
          animation-duration: 1.5s;
          animation-timing-function: ease-out;
          animation-iteration-count: infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
          }
          80% {
            box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </>
  );
};

export default StickyButton;
