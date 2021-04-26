import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import DevicesIcon from "@material-ui/icons/Devices";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <>
      <Fade bottom cascade>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Card
            className={classes.root}
            variant="outlined"
            style={{ textAlign: "center", margin: "10px" }}
          >
            <CardContent>
              <Zoom delay={1000}>
                <DevicesIcon style={{ fontSize: 50 }} />
              </Zoom>

              <Typography variant="body2" component="p">
                TAILORED TO YOUR NEEDS
              </Typography>
            </CardContent>
          </Card>

          <Card
            className={classes.root}
            variant="outlined"
            style={{ textAlign: "center", margin: "10px" }}
          >
            <CardContent>
              <Zoom delay={1000}>
                <DevicesIcon style={{ fontSize: 50 }} />
              </Zoom>

              <Typography variant="body2" component="p">
                MOBILE RESPONSIVE DESIGN
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Fade>
    </>
  );
}
