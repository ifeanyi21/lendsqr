import React from "react";
import { Link } from "react-router-dom";
import {
  AuditLogs,
  BriefCaseIcon,
  CustomerIcon,
  DashboardIcon,
  FeesAndChargesIcon,
  FeesAndPricing,
  GuarantorIcon,
  HandShakeIcon,
  KarmaIcon,
  LoanIcon,
  LoanProductsIcon,
  LoanRequest,
  OrganizationIcon,
  PreferencesIcon,
  ReportsIcon,
  SavingsIcon,
  SavingsProductsIcon,
  ServiceAccountIcon,
  ServicesIcon,
  SettlementsIcon,
  SwitchIcon,
  TransactionsIcon,
  WhiteListIcon,
} from "../../assests/svg/svg";

const SideBar = () => {
  return (
    <div>
      <Link to={"/dashboard"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: "52px",
            marginTop: "39px",
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <BriefCaseIcon />
            <div style={{ marginLeft: 10, marginRight: 10 }}>
              Switch Organization
            </div>
            <SwitchIcon />
          </div>
        </div>
      </Link>

      <Link to={"/dashboard"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 41,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <DashboardIcon />
            <div style={{ marginLeft: 10 }}>Dashboard</div>
          </div>
        </div>
      </Link>
      <div style={{ marginBottom: 10, marginLeft: 30 }}>
        <h5 className="text-xs" style={{ color: "#545F7D" }}>
          CUSTOMERS
        </h5>
      </div>

      <Link to={"/users"} style={{ color: "#213F7D" }}>
        <div
          className={"active"}
          style={{
            marginBottom: 20,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <CustomerIcon />
            <div style={{ marginLeft: 10 }}>Users</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <GuarantorIcon />
            <div style={{ marginLeft: 10 }}>Guarantors</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <LoanIcon />
            <div style={{ marginLeft: 10 }}>Loans</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <HandShakeIcon />
            <div style={{ marginLeft: 10 }}>Decision Models</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <SavingsIcon />
            <div style={{ marginLeft: 10 }}>Savings</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <LoanRequest />
            <div style={{ marginLeft: 10 }}>Loan Requests</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <WhiteListIcon />
            <div style={{ marginLeft: 10 }}>Whitelist</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 41,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <KarmaIcon />
            <div style={{ marginLeft: 10 }}>Karma</div>
          </div>
        </div>
      </Link>

      <div style={{ marginBottom: 20, marginLeft: 30 }}>
        <h5 className="text-xs" style={{ color: "#545F7D" }}>
          BUSINESSES
        </h5>
      </div>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <OrganizationIcon />
            <div style={{ marginLeft: 10 }}>Organization</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <LoanProductsIcon />
            <div style={{ marginLeft: 10 }}>Loan Products</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <SavingsProductsIcon />
            <div style={{ marginLeft: 10 }}>Savings Products</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <FeesAndChargesIcon />
            <div style={{ marginLeft: 10 }}>Fees and Charges</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <TransactionsIcon />
            <div style={{ marginLeft: 10 }}>Transactions</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <ServicesIcon />
            <div style={{ marginLeft: 10 }}>Services</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <ServiceAccountIcon />
            <div style={{ marginLeft: 10 }}>Services Accounts</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <SettlementsIcon />
            <div style={{ marginLeft: 10 }}>Settlements</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 41,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <ReportsIcon />
            <div style={{ marginLeft: 10 }}>Reports</div>
          </div>
        </div>
      </Link>

      <div style={{ marginBottom: 20, marginLeft: 30 }}>
        <h5 className="text-xs" style={{ color: "#545F7D" }}>
          SETTINGS
        </h5>
      </div>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <PreferencesIcon />
            <div style={{ marginLeft: 10 }}>Preferences</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <FeesAndPricing />
            <div style={{ marginLeft: 10 }}>Fees and Pricing</div>
          </div>
        </div>
      </Link>

      <Link to={"/"} style={{ color: "#213F7D" }}>
        <div
          style={{
            marginBottom: 31,
          }}
        >
          <div className={`flex items-center `} style={{ paddingLeft: 30 }}>
            <AuditLogs />
            <div style={{ marginLeft: 10 }}>Audit Logs</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
