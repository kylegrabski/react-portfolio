import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import Grid from "@material-ui/core/Grid";

// @ToDo make background color of navbar opaque. Maybe add a word or two to show the hamburger icon to bring the navbar down

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {" "}
      <Grid container justify="center">
        <List>
          <Link to="/">
            <ListItem button key="About">
              <ListItemText primary="About" />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/projects">
            <ListItem button key="Projects">
              <ListItemText primary="Projects" />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/contact">
            <ListItem button key="Contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </Link>
        </List>
      </Grid>
    </div>
  );

  return (
    <div>
      <Grid container justify="center">
        {["top"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button className="navbtn" onClick={toggleDrawer(anchor, true)}>
              {" "}
              <DragHandleIcon />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}
