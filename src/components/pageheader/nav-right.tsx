import {
  Maximize,
  Save,
  Bell,
  Search,
  Mail,
  User,
  FileText,
  LogIn,
} from "react-feather";
const NavRight = () => {
  return (
    <div className="nav-right col p-0">
      <ul className="header-menu">
        <li>
          <div className="d-md-none mobile-search">
            <Search />
          </div>
          <div className="form-group search-form">
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
            />
          </div>
        </li>
        <li>
          <a href="#!" onClick={() => "javascript:toggleFullScreen()"}>
            <Maximize />
          </a>
        </li>
        <li className="onhover-dropdown">
          <a href="#!">
            <Save />
          </a>
          <div className="notification-dropdown onhover-show-div">
            <div className="dropdown-title">
              <h6>Recent Attachments</h6>
              <a href="reports.html">Show all</a>
            </div>
            <ul>
              <li>
                <div className="media">
                  <div className="icon-notification bg-success-light">
                    <i className="fas fa-file-word"></i>
                  </div>
                  <div className="media-body">
                    <a href="reports.html">
                      <h6>Doc_file.doc</h6>
                    </a>
                    <span>800MB</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="icon-notification bg-primary-light">
                    <i className="fas fa-file-image"></i>
                  </div>
                  <div className="media-body">
                    <a href="reports.html">
                      <h6>Apartment.jpg</h6>
                    </a>
                    <span>500kb</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="icon-notification bg-warning-light">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <div className="media-body">
                    <a href="reports.html">
                      <h6>villa_report.pdf</h6>
                    </a>
                    <span>26MB</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="onhover-dropdown notification-box">
          <a href="javascript:void(0)">
            <Bell />
            <span className="label label-shadow label-pill notification-badge">
              3
            </span>
          </a>
          <div className="notification-dropdown onhover-show-div">
            <div className="dropdown-title">
              <h6>Notifications</h6>
              <a href="favourites.html">Show all</a>
            </div>
            <ul>
              <li>
                <div className="media">
                  <div className="icon-notification bg-primary-light">
                    <i className="fab fa-xbox"></i>
                  </div>
                  <div className="media-body">
                    <h6>Item damaged</h6>
                    <span>8 hours ago, Tadawis 24</span>
                    <p className="mb-0">"the table is broken:("</p>
                    <ul className="user-group">
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="../assets/images/about/4.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="reply">
                        <a href="javascript:void(0)">Reply</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="icon-notification bg-success-light">
                    <i className="fas fa-file-invoice-dollar"></i>
                  </div>
                  <div className="media-body">
                    <h6>Payment received</h6>
                    <span>2 hours ago, Bracka 15</span>
                    <ul className="user-group">
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="../assets/images/about/1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="../assets/images/about/2.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="../assets/images/about/3.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="icon-notification bg-warning-light">
                    <i className="fas fa-comment-dots"></i>
                  </div>
                  <div className="media-body">
                    <h6>New inquiry</h6>
                    <span>1 Days ago, Krowada 7</span>
                    <p className="mb-0">"is the villa still available?"</p>
                    <ul className="user-group">
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="/images/about/2.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="/images/about/3.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="reply">
                        <a href="javascript:void(0)">Reply</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="onhover-dropdown">
          <a href="javascript:void(0)">
            <Mail />
          </a>
          <div className="notification-dropdown chat-dropdown onhover-show-div">
            <div className="dropdown-title">
              <h6>Messages</h6>
              <a href="user-profile.html">View all</a>
            </div>
            <ul>
              <li>
                <div className="media">
                  <div className="chat-user">
                    <img
                      src="/images/avatar/1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <h6>Bob Frapples</h6>
                    </a>
                    <span>Template Represents simply...</span>
                  </div>
                  <div className="status online">online</div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="chat-user">
                    <img
                      src="/images/avatar/3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <h6>Greta Life</h6>
                    </a>
                    <span>Template Represents simply...</span>
                  </div>
                  <div className="status away">Away</div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="chat-user">
                    <img
                      src="/images/avatar/4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <h6>Greta Life</h6>
                    </a>
                    <span>Template Represents simply...</span>
                  </div>
                  <div className="status online">online</div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="chat-user">
                    <img
                      src="/images/avatar/7.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <h6>Greta Life</h6>
                    </a>
                    <span>Template Represents simply...</span>
                  </div>
                  <div className="status busy">Busy</div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="profile-avatar onhover-dropdown">
          <div>
            <img src="/images/avatar/3.jpg" className="img-fluid" alt="" />
          </div>
          <ul className="profile-dropdown onhover-show-div">
            <li>
              <a href="user-profile.html">
                <span>Account </span>
                <User />
              </a>
            </li>
            <li>
              <a href="listing.html">
                <span>Listing</span>
                <FileText />
              </a>
            </li>
            <li>
              <a href="login.html">
                <span>Log in</span>
                <LogIn />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavRight;
