import React, { Component } from "react";
import logo from "@/assets/logo.png";
import { AppBar, Toolbar, Grid, Avatar, Typography, TextField, Menu, MenuItem } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

class NavBar extends Component {
  handleClickAccountIcon = () => {
    console.log("click");
  };

  render() {
    return (
      <AppBar color="inherit">
        <Toolbar variant="regular">
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Avatar alt="logo" src={logo} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" noWrap>
                天天安利 • 日报
              </Typography>
            </Grid>
            <Grid item>
              <TextField label="Search..." margin="dense" variant="outlined" />
            </Grid>
            <Grid item onClick={this.handleClickAccountIcon}>
              <Grid container justify="space-around">
                <Icon>account_circle</Icon>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
