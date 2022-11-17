import React from "react";

const Reviews = () => {
  return (
    <div className="desc-box">
      <div className="page-section">
        <h4 className="content-title">Reviews</h4>
        <div className="review">
          <div className="review-box">
            <div className="media">
              <img src="/images/avatar/3.jpg" className="img-70" alt="" />
              <div className="media-body">
                <h6>Olive Yew</h6>
                <p>Sep 13, 2022</p>
                <p className="mb-0">
                  The location, view from the rooms are just awesome. Very cool
                  landscaping has been done Around the hotel. There are small
                  activities that you can indulge with your family.
                </p>
              </div>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div className="review-box review-child">
            <div className="media">
              <img src="/images/avatar/4.jpg" className="img-70" alt="" />
              <div className="media-body">
                <h6>Allie Grater</h6>
                <p>Sep 25, 2022</p>
                <p className="mb-0">
                  We were there for 3 nights and hotel was too good. Greenery
                  was flaunting everywhere. There were games kept for our
                  entertainment.
                </p>
              </div>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
          <div className="review-box">
            <div className="media">
              <img src="/images/avatar/2.jpg" className="img-70" alt="" />
              <div className="media-body">
                <h6>Walter Melon</h6>
                <p>Oct 20, 2022</p>
                <p className="mb-0">
                  {" "}
                  There are small activities that you can indulge with your
                  family. Very cool landscaping has been done Around the hotel.
                  The location, view from the rooms are just awesome.
                </p>
              </div>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h4 className="content-title">Write a Review</h4>
        <form className="review-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Comment"></textarea>
          </div>
          <button
            type="submit"
            onClick={() =>
              console.log("document.location='submit-property.html'")
            }
            className="btn btn-gradient color-2 btn-pill"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
