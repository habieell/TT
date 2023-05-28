import React from "react";

function ContactItem(props) {
  const { name, imgURL,NIM, desc, desc2 } = props.contact;
  return (
    <div className="contact-item">
      <h2>{name}</h2>
      <img src={imgURL} alt="" />
      <h5>{NIM}</h5>
      <h5>{desc}</h5>
      <p>---------------------------------------</p>
      <h4>{desc2}</h4>
    </div>
  );
}

export default ContactItem;
