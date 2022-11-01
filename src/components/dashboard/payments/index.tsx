import React from "react";
import TopBody from "./top-body";

const BodyPayments = () => {
  return (
    <div className="page-body">
      <TopBody />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Payment lists</h5>
              </div>
              <div className="card-body payment-table">
                <div id="batchDelete" className="transactions"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyPayments;
