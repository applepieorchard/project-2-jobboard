import ReactModal from "react-modal";
import "./modal.css";
export default function modal({ isOpen, setIsOpen }) {
  const bg = {
    overlay: {
      backgroundImage: "linear-gradient(#4b8ee2, #60a2f4)",
      backgroundColor: "#4b8ee2",
      boxShadow: "20px 20px 50px grey",
      width: "40%",
      height: "65%",
      margin: "auto auto",
      // position: "relative",
      // left: "0",
      // top: "0",
    },
  };
  return (
    // <ReactModal
    //   isOpen={isOpen}
    //   contentLabel="Example Modal"
    //   onRequestClose={() => setIsOpen(false)}
    //   closeTimeoutMS={2000}
    //   style={bg}
    // >
    //   <div id="modal-container">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth="1.5"
    //       stroke="currentColor"
    //       style={{}}
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
    //       />
    //     </svg>

    //     <p className="notification-text">
    //       <strong>You have successfully applied</strong>
    //     </p>
    //     <button
    //       className="close-button"
    //       onClick={() => {
    //         setIsOpen(false);
    //       }}
    //     >
    //       close
    //     </button>
    //   </div>
    // </ReactModal>

    <div
      className={`modal fade${isOpen ? " show " : ""}`}
      style={
        isOpen
          ? { display: "block", borderRadius: "14px" }
          : { display: "none" }
      }
      // id="exampleModal"
      // tabIndex="-1"
      // aria-labelledby="exampleModalLabel"
      // aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              style={{}}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>{" "}
            <p className="notification-text">
              <strong>You have successfully applied</strong>{" "}
            </p>{" "}
            <button
              type="button"
              className="close-button"
              onClick={() => {
                setIsOpen(false);
              }}
              // data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
