import React from "react";
import { ChevronRight } from "react-feather";

const LastMonth = () => {
  return (
    <div className="large-6 col-lg-12 col-md-6">
      <div className="card invoice-card">
        <div className="card-header pb-0">
          <div>
            <h5>Last Month</h5>
          </div>
        </div>
        <div className="card-body calculations">
          <ul>
            <li>
              <h5 className="font-success">$47,215</h5>
              <h6 className="light-font mb-0 !tw-font-normal">Paid invoices</h6>
            </li>
            <li>
              <h5 className="font-danger">$5,780</h5>
              <h6 className="light-font mb-0 !tw-font-normal">Open invoices</h6>
            </li>
          </ul>
          <div className="d-flex">
            <a href="agent-invoice.html" className="label label-light color-4">
              <i className="fas fa-hand-holding-usd me-1 "></i>
              Payments Receive
            </a>
            <a
              href="agent-invoice.html"
              className="arrow-animated admin tw-flex tw-items-center"
            >
              View all
              <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastMonth;
