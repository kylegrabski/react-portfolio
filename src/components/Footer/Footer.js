import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footerDiv}>
      <div className="contact-links">
        <a
          href="https://github.com/kylegrabski"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon
            className={styles.gitHub}
            style={{ fontSize: 50, color: "black", margin: "15px" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/kyle-grabski-761b57195/"
          target="none"
          rel="noreferrer"
        >
          <LinkedInIcon
            className={styles.linkedIn}
            style={{ fontSize: 50, color: "black", margin: "15px" }}
          />
        </a>

        <a
          href="https://drive.google.com/file/d/1MQddVq-skznCPJAbkiVAoNfoM8MQ1gv2/view?usp=sharing"
          target="none"
          rel="noreferrer"
        >
          <DescriptionIcon
            className={styles.resume}
            style={{ fontSize: 50, color: "black", margin: "15px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
