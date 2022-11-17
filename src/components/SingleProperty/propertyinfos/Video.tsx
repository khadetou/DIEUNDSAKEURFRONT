import React from "react";

const Video = () => {
  return (
    <div className="desc-box">
      <div className="page-section ratio_40" id="video">
        <h4 className="content-title">video</h4>
        <div className="play-bg-image">
          <div className="bg-size">
            {/* <img src="/images/property/11.jpg" className="bg-img" alt="" /> */}
          </div>
          <div className="icon-video">
            <a data-bs-toggle="modal" data-bs-target="#videomodal">
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
