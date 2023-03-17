import React from "react";
import '../styles/index.css';
import { Image } from "react-bootstrap";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

export default function Footer() {
  return (
    <div>
    <div>
      <a href="https://github.com/AnitaBanh">
      <Image
        src={github}
        alt="github cat logo"
        className="footerIcon"
        width= {40}
        height= {40}
      />
      </a>
      <a href="https://linkedin.com/AnitaBanh">
      <Image
        src={linkedin}
        alt="LinkedIn logo"
        className="footerIcon"
        width= {40}
        height= {40}
      />
      </a>
    </div>
    </div>
  );
}
