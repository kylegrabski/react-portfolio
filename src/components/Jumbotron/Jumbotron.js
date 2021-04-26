import React from "react";
import styles from "./jumbotron.module.css";
import Container from "@material-ui/core/Container";
import Fade from "react-reveal/Fade";

// @ToDo style more, have image be at top, word div needs to be centered and mobile friendly
function Jumbotron() {
  const revealDiv = () => {
    document.getElementById(styles.jumbotron).addEventListener("click", (e) => {
      console.log("click");
    });
  };
  return (
    <>
      <Container
        className={styles.jumbotron}
        onClick={revealDiv}
        maxWidth="false"
        disableGutters="true"
        // style={{height:'10px'}}
      >
        {/* <img src={logo} alt="Logo"
        className={styles.logo}
        /> */}
        <div className={styles.logo}>
          <div className={styles.welcomeName}>Kyle Grabski</div>
          <Fade top cascade>
            <div className={styles.slogan}>WEB DESIGN MADE SIMPLE</div>
          </Fade>
        </div>
        <br />
      </Container>
    </>
  );
}

{
  /* <p>Kyle Grabski</p>
<p>WEB DESIGN MADE SIMPLE </p> */
}
export default Jumbotron;
