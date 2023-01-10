import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import {
  DropDownHeaderIcon,
  Logo,
  NotificationBell,
  SearchIcon,
} from "../assests/svg/svg";
import UserImage from "../assests/images/userimage.png";

const Header = () => {
  const style = {
    backgroundColor: "#39CDCC",
    border: "#39CDCC",
    height: 40,
    width: 48,
    fontSize: 14,
  };

  return (
    <div
      className="flex items-center justify-between"
      style={{ padding: 30, boxShadow: "3px 0px 20px 0px #0000000A" }}
    >
      <div>
        <Logo />
      </div>

      <div>
        <InputGroup>
          <Form.Control
            placeholder="Search for anything"
            style={{ width: 400, height: 40 }}
          />
          <Button style={style}>
            <SearchIcon />
          </Button>
        </InputGroup>
      </div>
      <div className="flex justify-between items-center">
        <div style={{ marginRight: 50 }}>
          <p className="underline text-xs m-0">Docs</p>
        </div>

        <div style={{ marginRight: 33 }}>
          <NotificationBell />
        </div>
        <div>
          <img
            src={UserImage}
            className="w-12 h-12 rounded-full object-contain"
            alt="Adedeji"
          />
        </div>
        <div className="mx-3">
          <span>Adedeji</span>
        </div>
        <div>
          <DropDownHeaderIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
