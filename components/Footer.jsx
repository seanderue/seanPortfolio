import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__redes">
        <ul className="footer__redes-wrapper">
          <li>
            <Link href="/">
              <a className="footer__link">Home</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/sean-derue/">
              <a className="footer__link">LinkedIn</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/seanderue">
              <a className="footer__link">GitHub</a>
            </Link>
          </li>
          <li>
            <Link href="mailto:seanderue@gmail.com">
              <a className="footer__link">Contact Me</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="separator"></div>
      <p className="footer__text">© Sean DeRue 2022</p>
    </footer>
  );
}
