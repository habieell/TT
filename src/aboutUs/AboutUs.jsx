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
    desc: "oke",
    desc2: "gudnait",
  },
];

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="contact-listAU">
        {Contact.map((contact) => (
          <div className="cardAU" key={contact.name}>
            <div className="contentAU">
              <div className="frontAU">
                <img className="imgAU" src={contact.imgURL} alt={contact.name} />
                <div className="front-contentAU">
                  <div className="badgeAU">Contact</div>
                  <div className="descriptionAU">
                    <div className="titleAU">
                      <p>{contact.name}</p>
                      <p>{contact.NIM}</p>
                    </div>
                    <p>{contact.desc}</p>
                    <p>{contact.desc2}</p>
                  </div>
                </div>
              </div>
              <div className="backAU">
                <div className="back-contentAU">
                  <div className="circleAU" id="bottom"></div>
                  <div className="circleAU" id="right"></div>
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
