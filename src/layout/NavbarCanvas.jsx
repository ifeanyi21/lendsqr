import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  DropDownHeaderIcon,
  Logo,
  NotificationBell,
  SearchIcon,
} from "../assests/svg/svg";
import UserImage from "../assests/images/userimage.png";

function NavbarCanvas() {
  const style = {
    backgroundColor: "#39CDCC",
    border: "#39CDCC",
    height: 40,
    width: 48,
    fontSize: 14,
  };
  return (
    <>
      <Navbar
        bg="white"
        expand={"lg"}
        style={{ padding: 30, boxShadow: "3px 0px 20px 0px #0000000A" }}
      >
        <Navbar.Brand href="#" style={{marginRight:168}}>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="top">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><Logo /></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-between flex-grow-1">
              <div className="mb-1">
                <InputGroup style={{flexWrap:'nowrap'}}>
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
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}

export default NavbarCanvas;
