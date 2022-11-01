import React from "react";
import TopBody from "./top-body";

const BodyReports = () => {
  return (
    <div className="page-body">
      <TopBody />
      <div className="container-fluid">
        <div className="row report-summary">
          <div className="col-xl-8 xl-12">
            <div className="card sales-details">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="sales-status">
                      <h5>Sales summary</h5>
                      <div className="status-price">
                        <h3>$16,230/-</h3>
                        <span>
                          last week
                          <span className="font-success">
                            + 10%
                            <i data-feather="trending-up"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="chart-legends">
                      <ul>
                        <li>
                          <div className="bg-primary circle-label"></div>
                          <span>Last week</span>
                        </li>
                        <li className="mt-1">
                          <div className="bg-secondary circle-label"></div>
                          <span>Running week</span>
                        </li>
                      </ul>
                    </div>
                    <div className="last-updated light-box">
                      <span>Last updated</span>
                      <h5>Dec 26, 2022</h5>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="monthly-sales">
                      <div className="icon-box">
                        <i className="fas fa-chevron-left light-font"></i>
                      </div>
                      <h6>Octobar, 2022</h6>
                      <div className="icon-box">
                        <i className="fas fa-chevron-right light-font"></i>
                      </div>
                    </div>
                    <div className="bar-sales">
                      <div id="sale-chart"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 xl-6">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Management Reports</h5>
              </div>
              <div className="card-body management-table">
                <div className="table-responsive">
                  <table className="table table-bordernone">
                    <tbody>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="/images/svg/icon/pdf.png"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Report 8/10/22 - 15/10/22</h6>
                              <span>Created 16/10/22</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href="text_file.txt" download>
                            <i
                              data-feather="download"
                              className="light-font"
                            ></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="/images/svg/icon/pdf.png"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Report 20/10/22 - 25/10/22</h6>
                              <span>Created 24/10/22</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href="text_file.txt" download>
                            <i
                              data-feather="download"
                              className="light-font"
                            ></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="/images/svg/icon/pdf.png"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Report 30/10/22 - 5/11/22</h6>
                              <span>Created 1/11/22</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href="text_file.txt" download>
                            <i
                              data-feather="download"
                              className="light-font"
                            ></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="/images/svg/icon/pdf.png"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Report 10/11/22 - 15/11/22</h6>
                              <span>Created 17/11/22</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href="text_file.txt" download>
                            <i
                              data-feather="download"
                              className="light-font"
                            ></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="/images/svg/icon/pdf.png"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Report 20/11/22 - 25/11/22</h6>
                              <span>Created 28/11/22</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href="text_file.txt" download>
                            <i
                              data-feather="download"
                              className="light-font"
                            ></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Revenue</h5>
              </div>
              <div className="card-body pt-0">
                <div className="revenue-container">
                  <div id="revenuechart"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Property sales</h5>
              </div>
              <div className="card-body report-table">
                <div className="table-responsive recent-properties">
                  <table className="table table-bordernone m-0">
                    <thead>
                      <tr>
                        <th className="light-font">Property</th>
                        <th className="light-font">Type</th>
                        <th className="light-font">Date</th>
                        <th className="light-font">Status</th>
                        <th className="light-font">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="/images/property/2.jpg"
                              className="img-fluid img-80"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Orchard House</h6>
                              <span className="light-font">Brazil</span>
                            </div>
                          </div>
                        </td>
                        <td className="light-font">Sold</td>
                        <td className="light-font">15/2/22</td>
                        <td>
                          <span className="label label-light color-3">
                            Paid
                          </span>
                        </td>
                        <td>
                          <i
                            className="light-font"
                            data-feather="more-horizontal"
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="/images/property/3.jpg"
                              className="img-fluid img-80"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Neverland</h6>
                              <span className="light-font">London</span>
                            </div>
                          </div>
                        </td>
                        <td className="light-font">Sold</td>
                        <td className="light-font">8/9/22</td>
                        <td>
                          <span className="label label-light color-3">
                            Paid
                          </span>
                        </td>
                        <td>
                          <i
                            className="light-font"
                            data-feather="more-horizontal"
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="/images/property/4.jpg"
                              className="img-fluid img-80"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Sea Breezes</h6>
                              <span className="light-font">France</span>
                            </div>
                          </div>
                        </td>
                        <td className="light-font">Sold</td>
                        <td className="light-font">26/10/22</td>
                        <td>
                          <span className="label label-light color-3">
                            Paid
                          </span>
                        </td>
                        <td>
                          <i
                            className="light-font"
                            data-feather="more-horizontal"
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="pb-0">
                          <div className="media">
                            <img
                              src="/images/property/2.jpg"
                              className="img-fluid img-80"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Orchard House</h6>
                              <span className="light-font">Brazil</span>
                            </div>
                          </div>
                        </td>
                        <td className="light-font">Sold</td>
                        <td className="light-font">15/2/22</td>
                        <td>
                          <span className="label label-light color-3">
                            Paid
                          </span>
                        </td>
                        <td>
                          <i
                            className="light-font"
                            data-feather="more-horizontal"
                          ></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Income Analysis</h5>
              </div>
              <div className="card-body income-wrap">
                <ul className="overview-content">
                  <li>
                    <div className="d-flex">
                      <div>
                        <p className="mb-0 light-font">Rent income</p>
                        <h4>$31415</h4>
                      </div>
                      <span>
                        <span className="label label-success">+30%</span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <div>
                        <p className="mb-0 light-font">Sale income</p>
                        <h4>$78812</h4>
                      </div>
                      <span>
                        <span className="label label-success">+20%</span>
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="income-container">
                  <div id="incomechart"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Visitors Location</h5>
              </div>
              <div className="card-body">
                <div className="jvector-map-report" id="asia"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Recent transactions</h5>
              </div>
              <div className="card-body report-table">
                <div className="table-responsive transactions-table">
                  <table className="table table-bordernone m-0">
                    <thead>
                      <tr>
                        <th className="light-font">#</th>
                        <th className="light-font">Property</th>
                        <th className="light-font">Type</th>
                        <th className="light-font">Amount</th>
                        <th className="light-font">Price</th>
                        <th className="light-font">Date</th>
                        <th className="light-font">Status</th>
                        <th className="light-font">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="media">
                            <img
                              src="/images/property/2.jpg"
                              className="img-fluid img-80"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Orchard House</h6>
                              <span className="light-font">Brazil</span>
                            </div>
                          </div>
                        </td>
                        <td>Sell</td>
                        <td>15,000</td>
                        <td>$125000.00</td>
                        <td>Jun 10, 2022</td>
                        <td>
                          <span className="label label-light color-4">
                            Pending
                          </span>
                        </td>
                        <td>
                          <i
                            className="light-font"
                            data-feather="more-horizontal"
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <div className="media">
                            <img
                              src="/images/property/5.jpg"
                              className="img-fluid img-80"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Sea Breezes</h6>
                              <span className="light-font">France</span>
                            </div>
                          </div>
                        </td>
                        <td>Rent</td>
                        <td>8,000</td>
                        <td>$2580000.00</td>
                        <td>Aug 15, 2022</td>
                        <td>
                          <span className="label label-light color-3">
                            Paid
                          </span>
                        </td>
                        <td>
                          <i
                            className="light-font"
                            data-feather="more-horizontal"
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td className="pb-0">
                          <div className="media">
                            <img
                              src="/images/property/4.jpg"
                              className="img-fluid img-80"
                              alt=""
                            />
                            <div className="media-body">
                              <h6>Neverland</h6>
                              <span className="light-font">London</span>
                            </div>
                          </div>
                        </td>
                        <td>Rent</td>
                        <td>8,000</td>
                        <td>$1580000.00</td>
                        <td>Nov 28, 2022</td>
                        <td>
                          <span className="label label-light color-3">
                            Paid
                          </span>
                        </td>
                        <td>
                          <i
                            className="light-font"
                            data-feather="more-horizontal"
                          ></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyReports;
