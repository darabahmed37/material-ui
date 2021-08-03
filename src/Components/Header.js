import React from 'react';
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar
} from "@material-ui/core";
import {
  ChatBubble,
  NotificationsNone,
  PowerSettingsNew,
  Search
} from "@material-ui/icons";

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',

  }, searchInput: {
    opacity: 0.6,
    padding: `0 ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    '&:hover': {
      backgroundColor: "#f2f2f2"
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1)
    }
  }
}))

const Header = () => {
  const classes = useStyle()
  return (
    <AppBar position={"static"} className={classes.root}>
      <Toolbar>
        <Grid
          container
          alignItems={"center"}
        >
          <Grid item>
            <InputBase
              className={classes.searchInput}
              placeholder={"Search"}
              startAdornment={<Search fontSize={"small"}/>}/>
          </Grid>
          <Grid item sm/>
          <Grid item>
            
            <IconButton>
              <Badge badgeContent={4} color={"secondary"}>
                <NotificationsNone fontSize={"small"}/>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color={"primary"}>
                <ChatBubble fontSize={"small"}/>
              </Badge>
            
            </IconButton>
            <IconButton>
              <PowerSettingsNew fontSize={"small"}/>
            </IconButton>
          </Grid></Grid>
      </Toolbar>
    
    </AppBar>
  );
};

export default Header;