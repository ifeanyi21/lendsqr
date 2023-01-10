import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ px: 3, mt:"30px" }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function UserTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "white",
          fontSize: 10.9,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
        //   variant="scrollable"
        //   scrollButtons="auto"
          sx={{
            "& .css-zx9imm-MuiButtonBase-root-MuiTab-root ": {
              fontSize: 16,
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#39CDCC",
            },
          }}
        >
          <Tab
            style={{
              color: value === 0 ? "#39CDCC" : "black",
              textTransform: "capitalize",
              marginRight: "85px",
               marginLeft: "31px",
            }}
            wrapped
            label="General Details"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              color: value === 1 ? "#39CDCC" : "black",
              textTransform: "capitalize",
              marginRight: "50px",
            }}
            wrapped
            label="Documents"
            {...a11yProps(1)}
          />
          <Tab
            style={{
              color: value === 2 ? "#39CDCC" : "black",
              textTransform: "capitalize",
              marginRight: "50px",
            }}
            wrapped
            label="Bank Details"
            {...a11yProps(2)}
          />
          <Tab
            style={{
              color: value === 3 ? "#39CDCC" : "black",
              textTransform: "capitalize",
              marginRight: "50px",
            }}
            wrapped
            label="Loans"
            {...a11yProps(3)}
          />
          <Tab
            style={{
              color: value === 4 ? "#39CDCC" : "black",
              textTransform: "capitalize",
              marginRight: "50px",
            }}
            wrapped
            label="Savings"
            {...a11yProps(4)}
          />
          <Tab
            style={{
              color: value === 6 ? "#39CDCC" : "black",
              textTransform: "capitalize",
              marginRight: "19px",
            }}
            wrapped
            label="App and System"
            {...a11yProps(6)}
          />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        <GeneralDetails/>
      </TabPanel> */}
    </Box>
  );
}

export default UserTabs;
