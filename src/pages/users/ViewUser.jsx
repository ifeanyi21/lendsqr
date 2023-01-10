import React from "react";
import Button from "@mui/material/Button";
import { BackIcon } from "../../assests/svg/svg";
import { useNavigate, useParams } from "react-router-dom";
import UserTabs from "../../components/Tabs/Tabs";
import { Divider } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const ViewUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const getUser = async () => {
    const res = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    );
    return res.json();
  };

  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  console.log(data, isLoading);
  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <div className="mb-8">
            <Button
              sx={{
                color: "#545F7D",
                textTransform: "inherit",
                fontSize: "16px",
              }}
              startIcon={<BackIcon />}
              onClick={() => navigate(-1)}
            >
              Back to Users
            </Button>
          </div>
          <div className="mb-12 flex justify-between items-end userDetailsHeader">
            <h4 style={{ fontSize: 24, color: "#213F7D" }}>User Details</h4>
            <div className="flex">
              <button className="rounded-lg text-sm font-semibold blacklistButton">
                BLACKLIST USER
              </button>
              <button className="rounded-lg text-sm font-semibold activateButton">
                ACTIVATE USER
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded"
            style={{
              boxShadow: "3px 5px 20px 0px #0000000A",
              padding: "30px 30px 0px 30px",
            }}
          >
            <div className="row userInfoWrapper">
              <div className="col-md-2 ">
                <img
                  src={data.profile.avatar}
                  className="rounded-full object-contain"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
              </div>
              <div className="col-md-3">
                <h3
                  className="font-medium"
                  style={{ color: "#213F7D", fontSize: 22, marginBottom: 8 }}
                >
                   {data.profile.firstName + data.profile.lastName}
                </h3>
                <span
                  className="text-sm font-normal"
                  style={{ color: "#545F7D" }}
                >
                  LSQFf587g90
                </span>
              </div>
              <div
                className="col-md-2"
                style={{
                  borderLeft: "1px solid #545F7D",
                  borderRight: "1px solid #545F7D",
                }}
              >
                <span style={{ color: "#545F7D" }}>User’s Tier</span>
                <div style={{ marginTop: 11 }}>Stars</div>
              </div>
              <div className="col-md-3">
                <h3
                  className="font-medium"
                  style={{ color: "#213F7D", fontSize: 22, marginBottom: 12 }}
                >
                  ₦{data.accountBalance}
                </h3>
                <span
                  className="text-sm font-normal"
                  style={{ color: "#545F7D" }}
                >
                  {data.accountNumber}/Providus Bank
                </span>
              </div>
            </div>
            <UserTabs />
          </div>
          <div
            style={{ marginTop: 30, padding: 30 }}
            className="bg-white rounded"
          >
            <p
              className="text-base font-medium"
              style={{ color: "#213F7D", marginBottom: 30 }}
            >
              Personal Information
            </p>
            <div className="flex userInfo justify-between" style={{ marginBottom: 30 }}>
              <div>
                <h6 className="userInfoHeader">FULL NAME</h6>
                <p className="userInfoBody"> {data.profile.firstName +" " + data.profile.lastName}</p>
              </div>
              <div>
                <h6 className="userInfoHeader">PHONE NUMBER</h6>
                <p className="userInfoBody"> {data.profile.phoneNumber}</p>
              </div>
              <div>
                <h6 className="userInfoHeader">EMAIL ADDRESS</h6>
                <p className="userInfoBody">{data.email}</p>
              </div>
              <div>
                <h6 className="userInfoHeader">BVN</h6>
                <p className="userInfoBody">{data.profile.bvn}</p>
              </div>
              <div>
                <h6 className="userInfoHeader">GENDER</h6>
                <p className="userInfoBody">{data.profile.gender}</p>
              </div>
            </div>
            <div className="flex userInfo">
              <div style={{ marginRight: 123 }}>
                <h6 className="userInfoHeader">MARTIAL STATUS</h6>
                <p className="userInfoBody">{'Single'}</p>
              </div>
              <div style={{ marginRight: 145 }}>
                <h6 className="userInfoHeader">CHILDREN</h6>
                <p className="userInfoBody">None</p>
              </div>
              <div>
                <h6 className="userInfoHeader">TYPE OF RESIDENCE</h6>
                <p className="userInfoBody">Grace Effiom</p>
              </div>
            </div>
            <div style={{ marginBottom: 30, marginTop: 30 }}>
              <Divider color="#213F7D" />
            </div>
            <p
              className="text-base font-medium"
              style={{ color: "#213F7D", marginBottom: 30 }}
            >
              Education and Employment
            </p>
            <div className="flex userInfo justify-between" style={{ marginBottom: 30 }}>
              <div>
                <h6 className="userInfoHeader">LEVEL OF EDUCATION</h6>
                <p className="userInfoBody">{data.education.level}</p>
              </div>
              <div>
                <h6 className="userInfoHeader">EMPLOYMENT STATUS</h6>
                <p className="userInfoBody">{data.education.employmentStatus}</p>
              </div>
              <div>
                <h6 className="userInfoHeader">SECTOR OF EMPLOYMENT</h6>
                <p className="userInfoBody">{data.education.sector}</p>
              </div>
              <div>
                <h6 className="userInfoHeader">DURATION OF EMPLOYMENT</h6>
                <p className="userInfoBody">{data.education.duration}</p>
              </div>
            </div>
            <div className="flex userInfo">
              <div style={{ marginRight: 145 }}>
                <h6 className="userInfoHeader">OFFICE EMAIL</h6>
                <p className="userInfoBody">{data.education.officeEmail}</p>
              </div>
              <div style={{ marginRight: 180 }}>
                <h6 className="userInfoHeader">MONTHLY INCOME</h6>
                <p className="userInfoBody">{"₦"+data.education.monthlyIncome[0] + "- ₦"+data.education.monthlyIncome[1]}</p>
                {/* {console.log(data.education.monthlyIncome[0])} */}
              </div>
              <div>
                <h6 className="userInfoHeader">LOAN REPAYMENT</h6>
                <p className="userInfoBody">{data.education.loanRepayment}</p>
              </div>
            </div>
            <div style={{ marginBottom: 30, marginTop: 30 }}>
              <Divider color="#213F7D" />
            </div>
            <p
              className="text-base font-medium"
              style={{ color: "#213F7D", marginBottom: 30 }}
            >
              Socials
            </p>
            <div className="flex userInfo" style={{ marginBottom: 30 }}>
              <div style={{ marginRight: 149 }}>
                <h6 className="userInfoHeader">TWITTER</h6>
                <p className="userInfoBody">{data.socials.twitter}</p>
              </div>
              <div style={{ marginRight: 142 }}>
                <h6 className="userInfoHeader">FACEBOOK</h6>
                <p className="userInfoBody">{data.socials.facebook}</p>
              </div>
              <div>
                <h6 className="userInfoHeader">INSTAGRAM</h6>
                <p className="userInfoBody">{data.socials.instagram}</p>
              </div>
            </div>
            <div style={{ marginBottom: 30, marginTop: 30 }}>
              <Divider color="#213F7D" />
            </div>
            <p
              className="text-base font-medium"
              style={{ color: "#213F7D", marginBottom: 30 }}
            >
              Guarantor
            </p>
            <div className="flex userInfo" style={{ marginBottom: 30 }}>
              <div style={{ marginRight: 149 }}>
                <h6 className="userInfoHeader">FULL NAME</h6>
                <p className="userInfoBody">{data.guarantor.firstName + data.guarantor.lastName}</p>
              </div>
              <div style={{ marginRight: 142 }}>
                <h6 className="userInfoHeader">PHONE NUMBER</h6>
                <p className="userInfoBody">{data.guarantor.phoneNumber}</p>
              </div>
              <div>
                <h6 className="userInfoHeader" style={{marginRight:143}}>EMAIL ADDRESS</h6>
                <p className="userInfoBody">{data.guarantor?.email}</p>
              </div>
              <div>
                <h6 className="userInfoHeader">RELATIONSHIP</h6>
                <p className="userInfoBody">{data.guarantor?.relationship}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewUser;
