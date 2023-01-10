import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  ActiveUsersIcon,
  UsersIcon,
  UsersWithLoansIcon,
  UsersWithSavingsIcon,
} from "../../assests/svg/svg";
import Table from "../../components/Tables/Tables";

const Users = () => {
  const getUsers = async () => {
    const res = await fetch(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );
    return res.json();
  };

  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return (
    <div>
      <div className="mb-10">
        <h4 style={{ fontSize: 24, color: "#213F7D" }}>Users</h4>
      </div>

      <div className="row">
        <div className="col-lg-3 mb-10">
          <div className="cardContainer rounded-sm">
            <div style={{ marginBottom: 14 }}>
              <UsersIcon />
            </div>
            <div
              className="text-sm"
              style={{ color: "#545F7D", marginBottom: 12 }}
            >
              USERS
            </div>
            <div style={{ color: "#213F7D" }} className="text-2xl">
              {data?.length || 0}
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-10">
          <div className="cardContainer rounded-sm">
            <div style={{ marginBottom: 14 }}>
              <ActiveUsersIcon />
            </div>
            <div
              className="text-sm"
              style={{ color: "#545F7D", marginBottom: 12 }}
            >
              ACTIVE USERS
            </div>
            <div style={{ color: "#213F7D" }} className="text-2xl">
              {data?.length || 0}
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-10">
          <div className="cardContainer rounded-sm">
            <div style={{ marginBottom: 14 }}>
              <UsersWithLoansIcon />
            </div>
            <div
              className="text-sm"
              style={{ color: "#545F7D", marginBottom: 12 }}
            >
              USERS WITH LOANS
            </div>
            <div style={{ color: "#213F7D" }} className="text-2xl">
              2,453
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-10">
          <div className="cardContainer rounded-sm">
            <div style={{ marginBottom: 14 }}>
              <UsersWithSavingsIcon />
            </div>
            <div
              className="text-sm"
              style={{ color: "#545F7D", marginBottom: 12 }}
            >
              USERS WITH SAVINGS
            </div>
            <div style={{ color: "#213F7D" }} className="text-2xl">
              2,453
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Table data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Users;
