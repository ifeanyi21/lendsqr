import {
  BottomNavigation,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  Slide,
} from "@mui/material";
import React, { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavbarCanvas from "./NavbarCanvas";

const Layout = ({ children }) => {
  const [value, setValue] = useState(0);
  return (
    <>
      <NavbarCanvas />
      <div className="row">
        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }}
            elevation={3}
            className={"sideBarSmall"}
          >
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <FixedMenu />
            </BottomNavigation>
          </Paper>
        <div
          className="col-lg-2 bg-white hideNav"
          style={{ boxShadow: "0px 5px 20px 0px #0000000A", paddingRight: 0 }}
        >
          
          <SideBar />
        </div>
        <div
          className="col-lg-10 fillScreen"
          style={{ backgroundColor: "#E5E5E5", padding: 60 }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FixedMenu() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="warning" onClick={handleClickOpen} sx={{ marginTop: 1 }}>
        Menu
      </Button>
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent onClick={handleClose} sx={{ px: 1 }}>
          <SideBar />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
