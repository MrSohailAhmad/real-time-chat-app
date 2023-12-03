import { storage } from "../Utils/firebase";

function truncate(str, no_words) {
  return str.split(" ").splice(0, no_words).join(" ") + "...";
}

const Contact = (props) => {
  return (
    <div className="contact-list">
      <div className="contact w-100 py-2 px-3 mt-1 d-flex">
        <div className="col-sm ms-3 mt-1">
          <p>{props.name}</p>
          <p className="t-dark">{truncate(props.msg, 3)}</p>
        </div>
        <div className="d-flex flex-column mt-1">
          <span className="t-dark">{props.time}</span>
          {props.notif
            ? '<span className="notification ms-4 mt-2"></span>'
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Contact;
