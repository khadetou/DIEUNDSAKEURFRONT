import React from "react";
import TopBody from "./top-body";

const BodyAgentInvoice = () => {
  return (
    <div className="page-body">
      <TopBody />
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="invoice">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="invoice-logo">
                        <img
                          src="/images/logo/4.png"
                          className="img-fluid for-light"
                          alt=""
                        />
                        <img
                          src="/images/logo/9.png"
                          className="img-fluid for-dark"
                          alt=""
                        />
                        <span className="d-block mt-1">hello@sheltos.in</span>
                        <span className="d-block">289-335-6503</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="text-md-end">
                        <h3>Invoice #5170</h3>
                        <p className="mb-0">
                          Issued: May<span className="digits"> 18, 2022</span>
                          <br />
                          Payment Due: July{" "}
                          <span className="digits">20, 2022</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="address-invoice">
                    <div className="light-box row m-0">
                      <div className="col-md-6">
                        <div>
                          <h6 className="light-font">Invoice for</h6>
                          <h5>Bob Frapples</h5>
                          <p className="mb-0 light-font">
                            Mina Road, Dubai, United Arab Emirates
                          </p>
                          <p className="mb-0 light-font">
                            Mobile no: +61 052145008
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <h6 className="light-font">Invoice from</h6>
                          <h5>Zack Lee</h5>
                          <p className="mb-0 light-font">
                            Mina Road, Dubai, United Arab Emirates
                          </p>
                          <p className="mb-0 light-font">
                            Mobile no: +61 84521410
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive invoice-table">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Decription</th>
                          <th>Deposit</th>
                          <th>Rate</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Residences can be classified in residence.</td>
                          <td>$400</td>
                          <td>$580</td>
                          <td>$800.00</td>
                        </tr>
                        <tr>
                          <td>Residences can be classified in residence.</td>
                          <td>$300</td>
                          <td>$450</td>
                          <td>$900.00</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            <h6 className="mb-0">Total</h6>
                          </td>
                          <td>
                            <h6 className="mb-0">$1800.00</h6>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row invoice-note">
                    <div className="col-md-4">
                      <div>
                        <img
                          src="/images/signature/3.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8 text-md-end">
                      <p className="legal">
                        <strong>Thank you for your business!</strong>&nbsp;
                        Payment is expected within 31 days; please process this
                        invoice within that time. There will be a 5% interest
                        charge per month on late invoices.
                      </p>
                    </div>
                    <div className="col-sm-12 text-center mt-3">
                      <button
                        onClick={() => console.log("myFunction()")}
                        type="button"
                        className="btn btn-pill btn-gradient color-4"
                      >
                        Print
                      </button>
                      <button
                        type="button"
                        className="btn btn-pill btn-dashed color-4 ms-2"
                      >
                        cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAgentInvoice;
