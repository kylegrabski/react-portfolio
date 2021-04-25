import React from "react";
import Image from "material-ui-image";
import styles from "./jumbotron.module.css";
import Container from "@material-ui/core/Container";


// @ToDo style more, have image be at top, word div needs to be centered and mobile friendly
function Jumbotron() {
  return (
    <>
      <Container maxWidth="false"
      disableGutters="true">
          
        <Image
          className={styles.jmboimg}
          imageStyle={{height:'50%'}}
          src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80"
        />
        <div className={styles.welcomeText}>
          <p>Kyle Grabski</p>
          <p>WEB DESIGN MADE SIMPLE </p>
        </div>
      </Container>
    </>
  );
}

export default Jumbotron;
