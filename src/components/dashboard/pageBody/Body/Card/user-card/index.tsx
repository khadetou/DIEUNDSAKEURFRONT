import React from "react";
import TopBody from "../../top-body";
import User from "./cards/User";
import Filter from "./cards/Filter";
import Agence from "./cards/Agence";
import Owner from "./cards/Owner";

const UserCard = () => {
  return (
    <div className="page-body">
      <TopBody />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 xl-6 col-md-6 project-widgets">
            <User />
            <Agence />
            <Owner />
          </div>
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
