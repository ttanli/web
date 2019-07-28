import React, { Component } from "react";
import logo from "@/assets/logo.png";
import { AppBar, Toolbar, Grid, Avatar, Typography, TextField, Hidden, Icon } from "@material-ui/core";

class NavBar extends Component {
  handleClickAccountIcon = () => {
    console.log("click");
  };

  setSearchKeyword = (value) => {
    this.keyword = value.toString().trim();
  };

  handleSearchOnEnterKeyUp = async (key) => {
    if (key === "Enter") {
    }
  };

  handleSearchIconOnClick = async () => {
    await this.searchShirts();
  };

  searchShirts = async () => {
    if (!!this.keyword) {
    }
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
                  onChange={({ target: { value } }) => this.setSearchKeyword(value)}
                  onKeyUp={({ key }) => this.handleSearchOnEnterKeyUp(key)}
                  InputProps={{
                    endAdornment: (
                      <Icon style={{ cursor: "pointer" }} onClick={this.handleSearchIconOnClick}>
                        search
                      </Icon>
                    ),
                  }}
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
