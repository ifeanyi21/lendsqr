import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ArrowDownIcon, CalendarIcon, FilterIcon } from "../../assests/svg/svg";
import { FormControl, Select } from "@mui/material";
import { Form } from "react-bootstrap";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function FilterMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FilterIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPaper-root": {
            height: 600,
            width: 270,
            boxShadow: "3px 5px 20px 0px #0000000A",
            padding: "20px 30px",
          },
        }}
      >
        <div className="text-sm" style={{ color: "#545F7D", marginBottom: 6 }}>
          Organization
        </div>
        <FormControl fullWidth size="small" sx={{ marginBottom: "20px" }}>
          <Select
            IconComponent={() => (
              <div style={{ marginRight: 16 }}>
                <ArrowDownIcon />
              </div>
            )}
            sx={{
              "& legend": { display: "none" },
              "& fieldset": { top: 0 },
              color: "#545F7D",
            }}
            name="gender"
            value={"Select"}
          >
            <MenuItem value="Select">Select</MenuItem>
          </Select>
        </FormControl>
        <div className="text-sm" style={{ color: "#545F7D", marginBottom: 6 }}>
          Username
        </div>
        <FormControl fullWidth size="small" sx={{ marginBottom: "20px" }}>
          <Form.Control type="text" placeholder="User" />
        </FormControl>
        <div className="text-sm" style={{ color: "#545F7D", marginBottom: 6 }}>
          Email
        </div>
        <FormControl fullWidth size="small" sx={{ marginBottom: "20px" }}>
          <Form.Control type="email" placeholder="Email" />
        </FormControl>

        <div className="text-sm" style={{ color: "#545F7D", marginBottom: 6 }}>
          Date
        </div>
        <FormControl fullWidth size="small" sx={{ marginBottom: "20px" }}>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <CalendarIcon />
              </InputAdornment>
            }
            placeholder="Date"
          />
        </FormControl>

        <div className="text-sm" style={{ color: "#545F7D", marginBottom: 6 }}>
          Phone Number
        </div>
        <FormControl fullWidth size="small" sx={{ marginBottom: "20px" }}>
          <Form.Control type="number" placeholder="Phone Number" />
        </FormControl>

        <div className="text-sm" style={{ color: "#545F7D", marginBottom: 6 }}>
          Status
        </div>
        <FormControl fullWidth size="small" sx={{ marginBottom: "20px" }}>
          <Select
            IconComponent={() => (
              <div style={{ marginRight: 16 }}>
                <ArrowDownIcon />
              </div>
            )}
            sx={{
              "& legend": { display: "none" },
              "& fieldset": { top: 0 },
              color: "#545F7D",
            }}
            name="gender"
            value={"Select"}
          >
            <MenuItem value="Select">Staus</MenuItem>
          </Select>
        </FormControl>
        <div className="flex justify-between">
          <button
            className="rounded-lg"
            style={{ border: "1px solid #545F7D", padding: "12px 30px" }}
          >
            Reset
          </button>
          <button
            className="rounded-lg text-white"
            style={{ backgroundColor: "#39CDCC", padding: "12px 30px" }}
          >
            Filter
          </button>
        </div>
      </Menu>
    </div>
  );
}
