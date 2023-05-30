import React from "react";
import ContactItem from "./ContactItem";
import "./AboutUs.css";
import arip from "./poto/arip.jpg";
import habil from "./poto/habil.jpeg";
import rici from "./poto/rici.jpeg";
import zita from "./poto/zita.jpg";

const Contact = [
  {
    name: "Aripp",
    imgURL: arip,
    NIM: "NIM: 00000073943",
    desc: "Bujug sang destroyer",
    desc2: "Disebelah kanan saya, atasan saya →",
  },
  {
    name: "Habieell",
    imgURL: habil,
    NIM: "NIM: 00000073909",
    desc: "Sang legenda link, penemu, pencetus rumus Error = Ga tidur.",
    desc2: "😪😪😪😪😪",
  },
  {
    name: "Zitaa",
    imgURL: zita,
    NIM: "NIM: 00000075267",
    desc: ".....",
    desc2: "I have nothing to say, just let me sleep",
  },
  {
    name: "Ricii",
    imgURL: rici,
    NIM: "NIM: 00000074763",
    desc: "aaaaaaaaaaaa",
    desc2: "Akhirnya bisa tidurrr nyenyak",
  },
];

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="contact-list">
        {Contact.map((contact) => (
          <div className="card" key={contact.name}>
            <div className="content">
              <div className="front">
                <img className="img" src={contact.imgURL} alt={contact.name} />
                <div className="front-content">
                  <div className="badge">Contact</div>
                  <div className="descriptionnn">
                    <div className="title">
                      <p>{contact.name}</p>
                      <p>{contact.NIM}</p>
                    </div>
                    <p>{contact.desc}</p>
                    <p>{contact.desc2}</p>
                  </div>
                </div>
              </div>
              <div className="back">
                <div className="back-content">
                  <div className="circle" id="bottom"></div>
                  <div className="circle" id="right"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
