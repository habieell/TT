import React from "react";

function ContactItem(props) {
  const { name, imgURL,NIM, desc } = props.contact;
  return (
    <div className="contact-item">
      <h2>{name}</h2>
      <img src={imgURL} alt="" />
      <p>{NIM}</p>
      <p>{desc}</p>
    </div>
  );
}

export default ContactItem;
