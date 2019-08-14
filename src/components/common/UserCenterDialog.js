import React, { Component } from "react";
import { Tabs, Tab, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@material-ui/core";

class UserCenterDialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, toggleOpen } = this.props;
    return (
      <Dialog disableBackdropClick onClose={toggleOpen} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={toggleOpen}>
          <Tabs indicatorColor="primary" textColor="primary" aria-label="User Center Dialog" variant="fullWidth">
            <Tab label="Sign In" />
            <Tab label="Sign Up" />
          </Tabs>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleOpen} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default UserCenterDialog;
