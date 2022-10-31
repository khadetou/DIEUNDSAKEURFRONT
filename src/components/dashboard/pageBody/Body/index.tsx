import React from "react";
import BehanceProjects from "./Card/behance-projects";
import CommingSoon from "./Card/comming-soon";
import LastMonth from "./Card/last-month";
import MonthlyNewp from "./Card/monthly-newp";
import ProjectTimeline from "./Card/project-timeline";
import PropertyCard from "./Card/property-card";
import SalesDetail from "./Card/sales-detail";
import TotalProjects from "./Card/total-projects";
import TopBody from "./top-body";

const Body = () => (
  <div className="page-body">
    <TopBody />

    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-4 large-12">
          <div className="row">
            <PropertyCard />
            <LastMonth />
          </div>
        </div>
        <SalesDetail />
        <TotalProjects />
        <BehanceProjects />
        <CommingSoon />
        <MonthlyNewp />
        <ProjectTimeline />
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5>Assignees</h5>
            </div>
            <div className="card-body assign-table pt-0">
              <div className="table-responsive">
                <table className="table table-bordernone">
                  <tbody>
                    <tr>
                      <td>
                        <div className="media">
                          <img
                            src="../assets/images/avatar/1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="media-body">
                            <a href="user-profile.html">
                              <a href="user-profile.html">
                                <h6>Bob Frapples</h6>
                              </a>
                            </a>
                            <span>Pumbing</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6 className="font-danger">10</h6>
                        <span>Open</span>
                      </td>
                      <td>
                        <h6 className="font-warning">3</h6>
                        <span>Escaleted</span>
                      </td>
                      <td>
                        <h6 className="font-success">126</h6>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <img
                            src="../assets/images/avatar/3.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="media-body">
                            <a href="user-profile.html">
                              <a href="user-profile.html">
                                <h6>Greta Life</h6>
                              </a>
                            </a>
                            <span>Pest control</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6 className="font-danger">8</h6>
                        <span>Open</span>
                      </td>
                      <td>
                        <h6 className="font-warning">20</h6>
                        <span>Escaleted</span>
                      </td>
                      <td>
                        <h6 className="font-success">154</h6>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <img
                            src="../assets/images/avatar/5.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="media-body">
                            <a href="user-profile.html">
                              <h6>Zack Lee</h6>
                            </a>
                            <span>others</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6 className="font-danger">5</h6>
                        <span>Open</span>
                      </td>
                      <td>
                        <h6 className="font-warning">18</h6>
                        <span>Escaleted</span>
                      </td>
                      <td>
                        <h6 className="font-success">79</h6>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <img
                            src="../assets/images/avatar/6.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="media-body">
                            <a href="user-profile.html">
                              <h6>Paige Turner</h6>
                            </a>
                            <span>Pest control</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6 className="font-danger">15</h6>
                        <span>Open</span>
                      </td>
                      <td>
                        <h6 className="font-warning">7</h6>
                        <span>Escaleted</span>
                      </td>
                      <td>
                        <h6 className="font-success">145</h6>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <img
                            src="../assets/images/avatar/4.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="media-body">
                            <a href="user-profile.html">
                              <h6>Mary Goround</h6>
                            </a>
                            <span>Pumbing</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6 className="font-danger">10</h6>
                        <span>Open</span>
                      </td>
                      <td>
                        <h6 className="font-warning">3</h6>
                        <span>Escaleted</span>
                      </td>
                      <td>
                        <h6 className="font-success">126</h6>
                        <span>Completed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 xl-6 col-lg-12 col-md-6">
          <div className="card">
            <div className="card-header pb-0">
              <div className="d-flex">
                <h5>My properties</h5>
                <a href="add-property.html">+ New</a>
              </div>
            </div>
            <div className="card-body properties-list">
              <div className="media">
                <img
                  src="../assets/images/property/14.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="media-body">
                  <a href="listing.html">
                    <h6>Orchard House</h6>
                  </a>
                  <ul>
                    <li>
                      <img
                        src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>3</span>
                    </li>
                    <li>
                      <img
                        src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>2</span>
                    </li>
                    <li>
                      <img
                        src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/sofa.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>1</span>
                    </li>
                  </ul>
                  <div>
                    <span className="light-font">Status: </span>
                    <span className="label label-light color-4">Rented</span>
                  </div>
                </div>
              </div>
              <div className="media">
                <img
                  src="../assets/images/7.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="media-body">
                  <a href="listing.html">
                    <h6>Neverland</h6>
                  </a>
                  <ul>
                    <li>
                      <img
                        src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>4</span>
                    </li>
                    <li>
                      <img
                        src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>4</span>
                    </li>
                    <li>
                      <img
                        src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/sofa.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>2</span>
                    </li>
                  </ul>
                  <div>
                    <span className="light-font">Status: </span>
                    <span className="label label-light color-4">Rented</span>
                  </div>
                </div>
              </div>
              <div className="media">
                <img
                  src="../assets/images/8.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="media-body">
                  <a href="listing.html">
                    <h6>Sea Breezes</h6>
                  </a>
                  <ul>
                    <li>
                      <img
                        src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>3</span>
                    </li>
                    <li>
                      <img
                        src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>2</span>
                    </li>
                    <li>
                      <img
                        src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/sofa.svg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>0</span>
                    </li>
                  </ul>
                  <div>
                    <span className="light-font">Status: </span>
                    <span className="label label-light color-3">Listed</span>
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
                            src="../assets/images/svg/icon/pdf.png"
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
                          <i data-feather="download" className="light-font"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <img
                            src="../assets/images/svg/icon/microsoft.png"
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
                          <i data-feather="download" className="light-font"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <img
                            src="../assets/images/svg/icon/excel.png"
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
                          <i data-feather="download" className="light-font"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <img
                            src="../assets/images/svg/icon/pdf.png"
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
                          <i data-feather="download" className="light-font"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <img
                            src="../assets/images/svg/icon/excel.png"
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
                          <i data-feather="download" className="light-font"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5 xl-6">
          <div className="card expiring-card">
            <div className="card-header">
              <div className="d-flex">
                <h5>Sold out</h5>
                <a href="apartment.html" className="arrow-animated">
                  See Details
                  <i data-feather="chevron-right"></i>
                </a>
              </div>
            </div>
            <div className="card-body pt-0 expiring-details">
              <div className="expiring-chart">
                <div id="Radial-chart"></div>
              </div>
              <div className="chart-detail">
                <div className="d-flex">
                  <div className="media">
                    <div className="with-reload">
                      <img
                        src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/1.svg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="media-body">
                      <h5>78</h5>
                      <span className="light-font">Properties</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="legend-exiring">
                <ul>
                  <li>
                    <div className="d-flex">
                      <span className="square-series bg-primary"></span>
                      <h6>10</h6>
                    </div>
                    <span className="light-font"> 20 Days</span>
                  </li>
                  <li>
                    <div className="d-flex">
                      <span className="square-series bg-success"></span>
                      <h6>50</h6>
                    </div>
                    <span className="light-font">21 - 40 Days</span>
                  </li>
                  <li>
                    <div className="d-flex">
                      <span className="square-series bg-warning"></span>
                      <h6>75</h6>
                    </div>
                    <span className="light-font">41 - 80 Days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Body;
