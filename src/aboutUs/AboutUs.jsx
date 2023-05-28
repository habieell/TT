import React from "react";
import ContactItem from "./ContactItem";
import "./AboutUs.css";

const Contact = [
  {
    name: "Aripp",
    imgURL:
      "",
    NIM:"NIM: 00000074763",
    desc:
      "Bujug sang destroyer.",
  },
  {
    name: "Habill",
    imgURL:
      "",
      NIM:"NIM: 00000073909",
    desc:
      "lorem ipsum",
  },
  {
    name: "Zitaa",
    imgURL:
      "",
      NIM:"NIM: 00000074763",
    desc:
      "lorem ipsum",
  },
  {
    name: "Ricii",
    imgURL:
      "",
      NIM:"NIM: 00000074763",
    desc:
      "lorem ipsum",
  }
];

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="contact-list">
        {Contact.map((contact) => (
          <ContactItem key={contact.name} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
