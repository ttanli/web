import React, { Component } from "react";
import logo from "@/assets/logo.png";
import { AppBar, Toolbar, Grid, Avatar, Typography } from "@material-ui/core";

class NavBar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar variant="dense">
          <Grid container alignContent="flex-start" alignItems="center" spacing={1}>
            <Grid item>
              <Avatar alt="logo" src={logo} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" noWrap>
                天天安利 • 日报
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
