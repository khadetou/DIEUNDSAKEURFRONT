import React from "react";
import TopBody from "./top-body";

const BodyProfile = () => {
  return (
    <div className="page-body">
      <TopBody />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="row user-info">
              <div className="col-xl-5 xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="media contact-media">
                      <img
                        src="/images/avatar/7.jpg"
                        className="img-fluid img-80"
                        alt=""
                      />
                      <div className="media-body">
                        <h4>Good Evening , Brock Lee</h4>
                        <span className="light-font">
                          My current address{" "}
                          <a href="javascript:void(0)">
                            Mina Road, Dubai, United Arab Emirates
                          </a>
                        </span>
                        <ul className="agent-social mt-2">
                          <li>
                            <a
                              href="https://www.facebook.com/"
                              className="facebook"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/" className="twitter">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://account.google.com/"
                              className="google"
                            >
                              <i className="fab fa-google"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/"
                              className="linkedin"
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="contact-btn">
                      <button
                        type="button"
                        onClick={() =>
                          console.log("document.location='all-users.html'")
                        }
                        className="btn btn-gradient color-4 btn-pill"
                      >
                        Email
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          console.log("document.location='add-user.html'")
                        }
                        className="btn btn-dashed color-4 ms-2 btn-pill"
                      >
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="partner-info">
                      <div className="title-about">
                        <h5>Project meetings</h5>
                      </div>
                      <div className="time-details">
                        <div>
                          <ul>
                            <li>
                              <img
                                src="/images/avatar/6.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/images/avatar/5.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/images/avatar/9.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/images/avatar/7.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/images/avatar/9.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </li>
                          </ul>
                          <a href="all-users.html" className="arrow-animated">
                            Join now
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-chevron-right"
                            >
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          </a>
                        </div>
                        <div>
                          <h6>4:00 - 5:00 PM</h6>
                          <span className="label label-light color-4">
                            10 mins left
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 xl-6">
                <div className="card timeline-card">
                  <div className="card-body">
                    <div className="partner-info">
                      <div className="title-about">
                        <h5>Monthly installment</h5>
                      </div>
                      <div className="timeline-pay">
                        <ul>
                          <li className="pay">
                            <div>
                              <i className="fas fa-check-circle"></i>
                              <span>Oct 18</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <i className="fas fa-check-circle"></i>
                              <span>Sep 25</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <i className="fas fa-check-circle"></i>
                              <span>Aug 10</span>
                            </div>
                          </li>
                        </ul>
                        <div className="timeline-right">
                          <h5 className="mb-0">$4.500</h5>
                          <a href="agent-invoice.html">View Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 xl-6 col-lg-12 col-md-5">
                <div className="about-profile row">
                  <div className="about-info col-xl-12 xl-12 col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="title-about">
                          <h5>About</h5>
                        </div>
                        <div className="table-responsive">
                          <table className="table table-bordernone mb-0">
                            <tbody>
                              <tr>
                                <td className="pt-0">Email:</td>
                                <td className="light-font pt-0">
                                  brockle@gmail.com
                                </td>
                              </tr>
                              <tr>
                                <td>Mobile Number:</td>
                                <td className="light-font">+ 61 1545812570</td>
                              </tr>
                              <tr>
                                <td>Gender:</td>
                                <td className="light-font">Male</td>
                              </tr>
                              <tr>
                                <td className="pb-0">DOB:</td>
                                <td className="light-font pb-0">
                                  Dec, 10 1990
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-info xl-none col-xl-12 xl-6 col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="title-about">
                          <h5>Friends</h5>
                        </div>
                        <div className="friend-list">
                          <ul className="row">
                            <li className="col-md-4 col-sm-3 col-4">
                              <img
                                src="/images/avatar/9.jpg"
                                className="img-fluid img-50"
                                alt=""
                              />
                              <h6>Bob</h6>
                              <a
                                href="add-user.html"
                                className="label label-light label-flat color-4"
                              >
                                Message
                              </a>
                            </li>
                            <li className="col-md-4 col-sm-3 col-4">
                              <img
                                src="/images/avatar/8.jpg"
                                className="img-fluid img-50"
                                alt=""
                              />
                              <h6>Greta</h6>
                              <a
                                href="add-user.html"
                                className="label label-light label-flat color-4"
                              >
                                Message
                              </a>
                            </li>
                            <li className="col-md-4 col-sm-3 col-4">
                              <img
                                src="/images/avatar/5.jpg"
                                className="img-fluid img-50"
                                alt=""
                              />
                              <h6>Zack</h6>
                              <a
                                href="add-user.html"
                                className="label label-light label-flat color-4"
                              >
                                Message
                              </a>
                            </li>
                            <li className="col-md-4 col-sm-3 col-4">
                              <img
                                src="/images/avatar/6.jpg"
                                className="img-fluid img-50"
                                alt=""
                              />
                              <h6>Paige</h6>
                              <a
                                href="add-user.html"
                                className="label label-light label-flat color-4"
                              >
                                Message
                              </a>
                            </li>
                            <li className="col-md-4 col-sm-3 col-4">
                              <img
                                src="/images/avatar/7.jpg"
                                className="img-fluid img-50"
                                alt=""
                              />
                              <h6>Mary</h6>
                              <a
                                href="add-user.html"
                                className="label label-light label-flat color-4"
                              >
                                Message
                              </a>
                            </li>
                            <li className="col-md-4 col-sm-3 col-4">
                              <img
                                src="/images/avatar/1.png"
                                className="img-fluid img-50"
                                alt=""
                              />
                              <h6>Vella</h6>
                              <a
                                href="add-user.html"
                                className="label label-light label-flat color-4"
                              >
                                Message
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 xl-6 col-lg-12 col-md-7">
                <div className="recent-properties">
                  <div className="card">
                    <div className="card-body">
                      <div className="title-about">
                        <h5>Recent properties</h5>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-bordernone mb-0">
                          <thead>
                            <tr>
                              <th>Property</th>
                              <th>Rate</th>
                              <th>Deposit</th>
                              <th>Start date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="media">
                                  <img
                                    src="/images/property/4.jpg"
                                    className="img-fluid img-80"
                                    alt=""
                                  />
                                  <div className="media-body">
                                    <h6>Orchard House</h6>
                                    <span className="light-font">Brazil</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <h6>$5800</h6>
                                <span className="light-font">monthly rent</span>
                              </td>
                              <td>
                                <h6>$400</h6>
                                <span className="light-font">deposit</span>
                              </td>
                              <td>
                                <h6>Jan, 18 2022</h6>
                                <span className="light-font">start date</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <img
                                    src="/images/property/2.jpg"
                                    className="img-fluid img-80"
                                    alt=""
                                  />
                                  <div className="media-body">
                                    <h6>Neverland</h6>
                                    <span className="light-font">France</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <h6>$8700</h6>
                                <span className="light-font">monthly rent</span>
                              </td>
                              <td>
                                <h6>$850</h6>
                                <span className="light-font">deposit</span>
                              </td>
                              <td>
                                <h6>Mar, 25 2022</h6>
                                <span className="light-font">start date</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="pb-0">
                                <div className="media">
                                  <img
                                    src="/images/property/3.jpg"
                                    className="img-fluid img-80"
                                    alt=""
                                  />
                                  <div className="media-body">
                                    <h6>Sea Breezes</h6>
                                    <span className="light-font">USA</span>
                                  </div>
                                </div>
                              </td>
                              <td className="pb-0">
                                <h6>$5880</h6>
                                <span className="light-font">monthly rent</span>
                              </td>
                              <td className="pb-0">
                                <h6>$380</h6>
                                <span className="light-font">deposit</span>
                              </td>
                              <td className="pb-0">
                                <h6>Jun, 05 2022</h6>
                                <span className="light-font">start date</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="earning-chart card">
                  <div className="card-body">
                    <div className="title-about">
                      <h5>Recent earnings</h5>
                    </div>
                    <div className="earnings"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 xl-6 col-md-12">
                <div className="row">
                  <div className="buyer-chart col-xl-12 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="title-about">
                          <h5>Total users</h5>
                        </div>
                        <div className="total-container">
                          <div id="userchart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="follow-list col-xl-12 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="title-about">
                          <h5>Following</h5>
                        </div>
                        <ul>
                          <li>
                            <div className="media">
                              <img
                                src="/images/avatar/2.jpg"
                                className="img-fluid img-50"
                                alt=""
                              />
                              <div className="media-body">
                                <h6>Bob Frapples</h6>
                                <span className="light-font">
                                  bobf@gmail.com
                                </span>
                              </div>
                              <div className="status online">Online</div>
                            </div>
                          </li>
                          <li>
                            <div className="media">
                              <img
                                src="/images/avatar/3.jpg"
                                className="img-fluid img-50"
                                alt=""
                              />
                              <div className="media-body">
                                <h6>Greta Life</h6>
                                <span className="light-font">
                                  gretali@gmail.com
                                </span>
                              </div>
                              <div className="status busy">Busy</div>
                            </div>
                          </li>
                          <li>
                            <div className="media">
                              <img
                                src="/images/avatar/4.jpg"
                                className="img-fluid img-50"
                                alt=""
                              />
                              <div className="media-body">
                                <h6>Zack Lee</h6>
                                <span className="light-font">
                                  zack@gmail.com
                                </span>
                              </div>
                              <div className="status away">Away</div>
                            </div>
                          </li>
                          <li>
                            <div className="media">
                              <img
                                src="/images/avatar/5.jpg"
                                className="img-fluid img-50"
                                alt=""
                              />
                              <div className="media-body">
                                <h6>Zack Lee</h6>
                                <span className="light-font">
                                  zack@gmail.com
                                </span>
                              </div>
                              <div className="status busy">Busy</div>
                            </div>
                          </li>
                        </ul>
                      </div>
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

export default BodyProfile;
