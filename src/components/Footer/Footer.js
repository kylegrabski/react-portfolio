import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import styles from "./footer.module.css"

function Footer() {
  return (
    <div className={styles.footerDiv}>
      <div class="contact-links">
        <a href="https://github.com/kylegrabski" target="_blank">
          <GitHubIcon className={styles.gitHub} style={{ fontSize: 50, color: "black", margin: "15px" }} />
        </a>

        <a
          href="https://www.linkedin.com/in/kyle-grabski-761b57195/"
          target="none"
        >
          <LinkedInIcon className={styles.linkedIn}style={{ fontSize: 50, color: "black", margin: "15px" }} />
        </a>

        <a
          href="https://drive.google.com/file/d/1rXN21uLQN11tGNJH0zuk-A-fj5fUaeAp/view?usp=sharing"
          target="none"
        >
          <DescriptionIcon className={styles.resume} 
          style={{ fontSize: 50, color: "black", margin: "15px" }} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
