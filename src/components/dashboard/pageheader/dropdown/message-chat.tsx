import React from "react";

const MessageChat = () => {
  return (
    <div className="notification-dropdown chat-dropdown onhover-show-div">
      <div className="dropdown-title">
        <h6>Messages</h6>
        <a href="user-profile.html">View all</a>
      </div>
      <ul>
        <li>
          <div className="media">
            <div className="chat-user">
              <img src="/images/avatar/1.jpg" className="img-fluid" alt="" />
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
              <img src="/images/avatar/3.jpg" className="img-fluid" alt="" />
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
              <img src="/images/avatar/4.jpg" className="img-fluid" alt="" />
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
              <img src="/images/avatar/7.jpg" className="img-fluid" alt="" />
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
  );
};

export default MessageChat;
