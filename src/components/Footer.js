import React from "react";
import '../styles/index.css';
import { Image } from "react-bootstrap";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import styled from 'styled-components'

export default function Footer() {

  const FooterIcon = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #dee2e6;
  border-radius: 3px;
`;

  return (
    <div>
    <div>
      <FooterIcon>
      <a href="https://github.com/AnitaBanh">
      <Image
        src={github}
        alt="github cat logo"
        className="footerIcon"
        width= {35}
        height= {35}
      />
      </a>
      </FooterIcon>
      <FooterIcon>
      <a href="https://linkedin.com/in/anitabanh">
      <Image
        src={linkedin}
        alt="LinkedIn logo"
        className="footerIcon"
        width= {35}
        height= {35}
      />
      </a>
      </FooterIcon>
    </div>
    </div>
  );
}
