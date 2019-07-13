import React, { Component } from "react";
import logo from "@/assets/logo.png";
import { AppBar, Toolbar, Grid, Avatar, Typography, TextField, Menu, MenuItem, Hidden } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

class NavBar extends Component {
  handleClickAccountIcon = () => {
    console.log("click");
  };

  render() {
    return (
      <AppBar color="inherit">
        <Toolbar variant="regular">
          <Grid container alignItems="center" justify="flex-start" spacing={1}>
            <Grid item>
              <Avatar alt="logo" src={logo} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" noWrap>
                天天安利
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="flex-end" spacing={1}>
            <Grid item>
              <Hidden smDown>
                <TextField label="Search" margin="dense" variant="outlined" />
              </Hidden>
            </Grid>
            <Grid item onClick={this.handleClickAccountIcon}>
              <Icon>account_circle</Icon>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
