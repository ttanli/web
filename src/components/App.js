import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "@/components/Homepage";
import NavBar from "@/components/common/NavBar";

import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  "contents-container": {
    marginTop: "80px",
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <Container>
          <NavBar></NavBar>
          <Container component="main" className={classes["contents-container"]}>
            <Route exact path="/" component={Homepage} />
          </Container>
        </Container>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
