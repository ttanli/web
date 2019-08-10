import React, { useState } from "react";
import { Icon, IconButton } from "@material-ui/core";
import UserCenterDialog from "./UserCenterDialog";

const UserCenter = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <React.Fragment>
      <IconButton edge="end" color="primary" aria-label="用户中心" onClick={toggleOpen}>
        <Icon style={{ cursor: "pointer" }}>account_circle</Icon>
      </IconButton>
      <UserCenterDialog open={open} toggleOpen={toggleOpen}></UserCenterDialog>
    </React.Fragment>
  );
};

export default UserCenter;
