import React from "react";

const Notification = () => {
  return (
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
                  <a href="#!">
                    <img
                      src="/images/about/4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </li>
                <li className="reply">
                  <a href="#!">Reply</a>
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
                  <a href="#!">
                    <img
                      src="/images/about/1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img
                      src="/images/about/2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img
                      src="/images/about/3.jpg"
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
                  <a href="#!">
                    <img
                      src="/images/about/2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img
                      src="/images/about/3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </li>
                <li className="reply">
                  <a href="#!">Reply</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Notification;
