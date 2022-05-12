import React from "react";

// style
import "../../assets/scss/main.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="attribution">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.linkedin.com/in/martin-eli%C3%A1%C5%A1-455550209/"
        target="_blank"
        rel="noreferrer"
      >
        Martin Eliáš
      </a>
      .
    </footer>
  );
};

export default Footer;
