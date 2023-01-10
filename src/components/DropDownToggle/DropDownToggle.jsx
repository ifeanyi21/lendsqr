//import { ToggleIcon, ViewEstateIcon } from "../../components/SideBar/icons";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import {
  ActivateDropDownIcon,
  BlacklistDropDownIcon,
  DropDownIcon,
  ViewDropDownIcon,
} from "../../assests/svg/svg";

export default function DropDownToggle(params) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <DropDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ boxShadow: "3px 5px 20px 0px #0000000A" }}
      >
        <div style={{ padding: 21 }}>
          <Link
            to={"user/" + params.params.id}
            onClick={handleClose}
            className="flex no-underline text-sm items-center font-medium"
            style={{ marginBottom: 20 }}
          >
            <ViewDropDownIcon />
            <span style={{ marginLeft: 13, color: "#545F7D" }}>
              View Details
            </span>{" "}
          </Link>
          <Link
            to={"user/" + params.params.id}
            onClick={handleClose}
            className="flex no-underline text-sm items-center font-medium"
            style={{ marginBottom: 20 }}
          >
            <BlacklistDropDownIcon />
            <span style={{ marginLeft: 13, color: "#545F7D" }}>
              Blacklist User
            </span>{" "}
          </Link>
          <Link
            to={"user/" + params.params.id}
            onClick={handleClose}
            className="flex no-underline text-sm items-center font-medium"
          >
            <ActivateDropDownIcon />
            <span style={{ marginLeft: 13, color: "#545F7D" }}>
              Activate User
            </span>{" "}
          </Link>
        </div>
      </Menu>
    </div>
  );
}
