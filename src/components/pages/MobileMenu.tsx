import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import clsx from "clsx";
import HomeIcon from "@material-ui/icons/Home";
import Link from "@material-ui/core/Link";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    toolbarButtons: {
      marginLeft: "auto",
      marginRight: -12
    },
    hide: {
      display: "none"
    }
  })
);

const MobileMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <header className="header header-center header-small">
      <div className="container-fluid">
        <div className={classes.root}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={classes.toolbarButtons}
          >
            <MenuIcon className={clsx(open && classes.hide)} />
          </IconButton>
          <SwipeableDrawer
            anchor="top"
            open={open}
            onClose={handleDrawerClose}
            onOpen={handleDrawerOpen}
          >
            <div role="presentation">
              <List>
                <Link href="#">
                  <ListItem button key="home" onClick={handleDrawerClose}>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItem>
                </Link>
                <Divider />
                <Link href="#resume">
                  <ListItem button key="resume" onClick={handleDrawerClose}>
                    <ListItemIcon>
                      <VerticalSplitIcon />
                    </ListItemIcon>
                    <ListItemText primary="Resume" />
                  </ListItem>
                </Link>
                <Divider />
                <ListItem button key="resume" className={classes.root}>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={handleDrawerClose}
                    className={classes.toolbarButtons}
                  >
                    Close &nbsp;
                  </Link>
                </ListItem>
              </List>
            </div>
          </SwipeableDrawer>
        </div>
      </div>
    </header>
  );
};

export { MobileMenu };
