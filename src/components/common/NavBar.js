import React, { Component } from "react";
import logo from "@/assets/logo.png";
import { AppBar, Toolbar, Grid, Avatar, Typography, TextField, Hidden } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

class NavBar extends Component {
  handleClickAccountIcon = () => {
    console.log("click");
  };

  handleSearchOnChange = async (event) => {
    console.log(event.target.value);
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
                <TextField
                  autoFocus
                  fullWidth
                  label="Search..."
                  margin="dense"
                  variant="outlined"
                  onChange={this.handleSearchOnChange}
                />
              </Hidden>
            </Grid>
            <Grid item onClick={this.handleClickAccountIcon}>
              <Grid container alignItems="center">
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
