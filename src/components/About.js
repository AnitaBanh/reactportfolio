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
Welcome to my personal portfolio page! My name is Anita and I'm a software developer with a passion for creating robust, user-friendly applications. I recently completed an intense certificate program at the University of Texas at Austin, where I learned full stack coding using the MERN stack.

Prior to my career transition, I spent over 15 years as a molecular biologist and in medical device quality assurance. During that time, I honed my skills in cross-functional communication, paying close attention to detail, and creating clear documentation. These skills have been invaluable in my software development work, where I strive to deliver high-quality code that meets the needs of end-users.

When I'm not coding, I enjoy exploring new cuisines (hold the cilantro) and caring for my house plants. Thanks for visiting my portfolio page and feel free to get in touch with any questions or opportunities!      </p>
    </div>
  );
}
