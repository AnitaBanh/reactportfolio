import React from 'react';
import '../styles/index.css';
import { Image } from 'react-bootstrap';
import avatar from "../assets/avatar.png"

export default function About() {
  return (
    <div>
      <Image src={avatar} rounded/>
      <h1>About me</h1>
      <p>
      Molecular Biologist with background in medical device quality assurance and full-stack web development. Effective at cross-functional communication. Known for strong attention to detail and clear documentation.
      </p>
    </div>
  );
}
