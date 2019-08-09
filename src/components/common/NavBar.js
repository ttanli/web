import React, { Component } from "react";
import logo from "@/assets/logo.png";
import { withRouter } from "react-router-dom";
import { AppBar, Toolbar, Grid, Avatar, Typography, TextField, Hidden, Icon } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import { search } from "@/apis/navbar";

import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

const styles = (theme) => ({
  speedDial: {
    position: "absolute",
  },
});

const actions = [
  { icon: <Icon>file_copy</Icon>, name: "Copy" },
  { icon: <Icon>save</Icon>, name: "Save" },
  { icon: <Icon>print</Icon>, name: "Print" },
  { icon: <Icon>share</Icon>, name: "Share" },
  { icon: <Icon>delete</Icon>, name: "Delete" },
];

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      open: false,
      hidden: false,
    };
  }
  handleClickAccountIcon = () => {
    console.log("click");
  };

  setSearchKeyword = (value) => {
    this.setState({ keyword: value.toString().trim() });
    console.log(this.state);
  };

  handleSearchOnEnterKeyUp = async (key) => {
    if (key === "Enter") {
      await this.searchDailys();
    }
  };

  handleSearchIconOnClick = async () => {
    await this.searchDailys();
  };

  searchDailys = async () => {
    if (!!this.state.keyword) {
      let dailys;
      let resp = await search(this.state.keyword);
      if (resp.status === 200) {
        dailys = resp.data;
      } else {
        dailys = [];
      }
      // console.log(dailys);
      this.props.updateDailys(dailys);
      this.props.history.push("/search");
    } else {
    }
  };

  handleLogoOnClick = () => {
    this.props.history.push("/");
  };

  // [open, setOpen] = React.useState(false);
  // [hidden, setHidden] = React.useState(false);

  setOpen = () => {
    this.setState({});
  };

  setHidden = () => {
    this.setState({});
  };

  handleVisibility = () => {
    setOpen(false);
    setHidden((prevHidden) => !prevHidden);
  };

  handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  handleOpen = () => {
    if (!hidden) {
      setOpen(true);
    }
  };

  handleClose = () => {
    setOpen(false);
  };

  render() {
    const { classes } = this.props;
    return (
      <AppBar color="inherit">
        <Toolbar variant="regular">
          <Grid container alignItems="center" justify="flex-start" spacing={1}>
            <Grid item onClick={this.handleLogoOnClick} style={{ cursor: "pointer" }}>
              <Avatar alt="logo" src={logo} />
            </Grid>
            <Grid item onClick={this.handleLogoOnClick} style={{ cursor: "pointer" }}>
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
                <Icon style={{ cursor: "pointer" }}>account_circle</Icon>
                <SpeedDial
                  ariaLabel="SpeedDial tooltip example"
                  className={classes.speedDial}
                  hidden={this.state.hidden}
                  icon={<SpeedDialIcon />}
                  onBlur={this.handleClose}
                  onClick={this.handleClick}
                  onClose={this.handleClose}
                  onFocus={this.handleOpen}
                  onMouseEnter={this.handleOpen}
                  onMouseLeave={this.handleClose}
                  open={this.state.open}>
                  {actions.map((action) => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                      tooltipOpen
                      onClick={this.handleClick}
                    />
                  ))}
                </SpeedDial>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dailys: state.dailyReducer.dailys,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDailys: (dailys) => {
      dispatch({ type: "UPDATE_DAILYS", dailys: dailys });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(NavBar)));
