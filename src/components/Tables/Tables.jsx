import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import dateFormat from "dateformat";
import DropDownToggle from "../DropDownToggle/DropDownToggle";
import FilterMenu from "../Filter/Filter";

function DateJoined(params) {
  return (
    <div style={{ fontSize: 14, color: "#545F7D" }}>
      {dateFormat(params.row.createdAt, "mmmm dS, yyyy h:MM TT")}
    </div>
  );
}

const columns = [
  {
    field: "orgName",
    //headerName: "",
    width: 150,
    // editable: true,
    sortable: false,
    flex: 1,
    minWidth: 130,
    align: "left",
    headerAlign: "left",
    renderHeader: () => (
      <div
        className="flex items-center text-xs font-semibold"
        style={{ color: "#545F7D" }}
      >
        {"ORGANIZATION "}
        <span style={{ marginLeft: 10 }}>
          <FilterMenu/>
        </span>
      </div>
    ),
  },
  {
    field: "userName",
    width: 150,
    // editable: true,
    sortable: false,
    flex: 1,
    minWidth: 100,
    align: "left",
    headerAlign: "left",
    renderHeader: () => (
      <div
        className="flex items-center text-xs font-semibold"
        style={{ color: "#545F7D" }}
      >
        {"USERNAME "}
        <span style={{ marginLeft: 10 }} className='cursor-pointer'>
          <FilterMenu/>
        </span>
      </div>
    ),
  },
  {
    field: "email",
    // headerName: "EMAIL",
    type: "number",
    width: 150,
    // editable: true,
    sortable: false,
    flex: 1,
    minWidth: 130,
    align: "left",
    headerAlign: "left",
    renderHeader: () => (
      <div
        className="flex items-center text-xs font-semibold"
        style={{ color: "#545F7D" }}
      >
        {"EMAIL "}
        <span style={{ marginLeft: 10 }}>
          <FilterMenu/>
        </span>
      </div>
    ),
  },
  {
    field: "phoneNumber",
    headerName: "PHONE NUMBER",
    type: "number",
    width: 110,
    // editable: true,
    sortable: false,
    flex: 1,
    minWidth: 130,
    align: "left",
    headerAlign: "left",
    renderHeader: () => (
      <div
        className="flex items-center text-xs font-semibold"
        style={{ color: "#545F7D" }}
      >
        {"PHONE NUMBER "}
        <span style={{ marginLeft: 10 }}>
          <FilterMenu/>
        </span>
      </div>
    ),
  },
  {
    field: "createdAt",
    headerName: "DATE JOINED",
    type: "date",
    width: 140,
    // editable: true,
    sortable: false,
    flex: 1,
    minWidth: 140,
    align: "left",
    headerAlign: "left",
    renderCell: (params) => <DateJoined {...params} />,
    renderHeader: () => (
      <div
        className="flex items-center text-xs font-semibold"
        style={{ color: "#545F7D" }}
      >
        {"DATE JOINED"}
        <span style={{ marginLeft: 10 }}>
          <FilterMenu/>
        </span>
      </div>
    ),
  },
  {
    field: "status",
    headerName: "STATUS",
    width: 110,
    // editable: true,
    sortable: false,
    flex: 1,
    minWidth: 130,
    align: "left",
    headerAlign: "left",
    renderHeader: () => (
      <div
        className="flex items-center text-xs font-semibold"
        style={{ color: "#545F7D" }}
      >
        {"STATUS"}
        <span style={{ marginLeft: 10 }}>
          <FilterMenu/>
        </span>
      </div>
    ),
  },
  {
    sortable: false,
    field: "toggle",
    headerName: "",
    width: 80,
    renderCell: (params) => {
      return (
        <DropDownToggle params={params}/>
      );
    },
  },
];

export default function Table({ data, isLoading }) {
  const [pageSize, setPageSize] = React.useState(10);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        "& .MuiDataGrid-columnSeparator--sideRight": {
          display: "none !important",
        },
        "& .MuiDataGrid-cellContent": {
          fontSize: 14,
          color: "#545F7D",
        },
        "& .MuiDataGrid-footerContainer":{
          backgroundColor:"#E5E5E5"
        },
        "& .MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows":{
          marginBottom:0
        }
      }}
    >
      <DataGrid
        autoHeight
        rows={data}
        loading={isLoading}
        columns={columns}
        rowsPerPageOptions={[10, 20, 40, 60, 100]}
        experimentalFeatures={{ newEditingApi: true }}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        pagination
        disableSelectionOnClick
        disableColumnMenu
      />
    </Box>
  );
}
