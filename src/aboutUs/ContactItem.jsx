import React from "react";

function ContactItem(props) {
  const { name, imgURL,NIM, desc, desc2 } = props.contact;
  return (
    <div className="contact-item">
      <img src={imgURL} alt="" />
      <h4>{name}</h4>
      <h6>{NIM}</h6>
      <p>---------------------------------------</p>
      <h5>{desc}</h5>
      <h5>{desc2}</h5>
    </div>
  );
}

export default ContactItem;
