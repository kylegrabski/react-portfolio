import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import Flip from 'react-reveal/Flip';
import styles from "./styles/projectCards.module.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProjectCards({ id, name, image, url, github, about }) {
  const classes = useStyles();

  return (
    <>
      <Flip bottom cascade>
        <Card className={classes.root} 
        style={{margin:"30px"}}
        >
          <CardActionArea href={url} target="_blank">
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={image}
              title={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {about}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href={github} target="_blank" size="small" color="primary">
              <code>CODE</code>
            </Button>
          </CardActions>
        </Card>
      </Flip>
    </>
  );
}
