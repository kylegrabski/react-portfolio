import React from "react";
import styles from "./jumbotron.module.css";
import Container from "@material-ui/core/Container";
import Fade from "react-reveal/Fade";
import TextLoop from "react-text-loop";

// @ToDo style more, have image be at top, word div needs to be centered and mobile friendly
function Jumbotron() {
  return (
    <>
      <Container
        className={styles.jumbotron}
        maxWidth={false}
        disableGutters={true}
      >
        <div className={styles.logo}>
          <div className={styles.welcomeName}>Kyle Grabski</div>
          <div className={styles.slogan}>
            <Fade top cascade>
              <div>WEB/</div>
            </Fade>
            <Fade bottom cascade>
              <div>DESIGN/</div>
            </Fade>
            <Fade right cascade>
              <div>MADE/</div>
            </Fade>
            <TextLoop
              children={[
                " SIMPLE",
                " CREATIVELY",
                " FUN",
                " EYE CATCHING",
                " INTERACTIVE",
                " STRESS FREE",
              ]}
            ></TextLoop>
          </div>
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
