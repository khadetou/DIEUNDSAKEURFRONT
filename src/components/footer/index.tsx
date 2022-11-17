import Logo from "/public/images/logo/dsksvg.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-brown">
      <div className="footer footer-custom-col">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-md-6 order-xl">
              <div className="footer-links footer-details">
                <h5 className="footer-title d-md-none">
                  Contact us
                  <span className="according-menu">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </h5>
                <div className="footer-content">
                  <a href="https://themes.pixelstrap.com/sheltos/index.html">
                    <Image src={Logo} alt="" className="img-fluid" />
                  </a>
                  <p>
                    This home provides entertaining spaces with a kitchen
                    opening...
                  </p>
                  <div className="footer-contact">
                    <ul>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>A-32, Albany,
                        Newyork.
                      </li>
                      <li>
                        <i className="fas fa-phone-alt"></i>(+066) 518 - 457 -
                        5181
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>Contact@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-3">
              <div className="footer-links footer-left-space">
                <h5 className="footer-title">
                  About
                  <span className="according-menu">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </h5>
                <ul className="footer-content">
                  <li>
                    <a href="about-us-2.html">About us</a>
                  </li>
                  <li>
                    <a href="list-no-sidebar.html">Listing</a>
                  </li>
                  <li>
                    <a href="single-property-1.html">Property</a>
                  </li>
                  <li>
                    <a href="portfolio-creative-1.html">Page</a>
                  </li>
                  <li>
                    <a href="property-element.html">Module</a>
                  </li>
                  <li>
                    <a href="blog-left-sidebar.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact-2.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 order-xl">
              <div className="footer-links">
                <h5 className="footer-title">
                  Our Location
                  <span className="according-menu">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </h5>
                <div className="footer-content">
                  <div className="footer-map">
                    <iframe
                      title="realestate location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-3 order-lg">
              <div className="footer-links footer-left-space">
                <h5 className="footer-title">
                  Tag
                  <span className="according-menu">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </h5>
                <ul className="footer-content">
                  <li>
                    <a href="blog-no-sidebar.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-list-left-sidebar.html">Blog list</a>
                  </li>
                  <li>
                    <a href="blog-creative-right-sidebar.html">Creative blog</a>
                  </li>
                  <li>
                    <a href="blog-masonry-left-sidebar.html">Masonry</a>
                  </li>
                  <li>
                    <a href="blog-list-mix-right-sidebar.html">Mix blog</a>
                  </li>
                  <li>
                    <a href="blog-detail-gallery.html">Details</a>
                  </li>
                  <li>
                    <a href="blog-detail-video.html">Video</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="footer-links">
                <h5 className="footer-title">
                  Our Latest Blog
                  <span className="according-menu">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </h5>
                <div className="footer-content">
                  <div className="footer-blog">
                    <div className="media">
                      <a href="blog-detail-left-sidebar.html">
                        <div className="img-overlay">
                          <img src="../assets/images/footer/1.jpg" alt="" />
                        </div>
                      </a>
                      <div className="media-body">
                        <h6>
                          <a href="blog-detail-left-sidebar.html">Top News</a>
                        </h6>
                        <p className="font-roboto mb-0">
                          <a href="blog-detail-right-sidebar.html">
                            Apartment or Flat An individual unit in a multi-unit
                            building.
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="media">
                      <a href="blog-detail-left-sidebar.html">
                        <div className="img-overlay">
                          <img src="../assets/images/footer/2.jpg" alt="" />
                        </div>
                      </a>
                      <div className="media-body">
                        <h6>
                          <a href="blog-detail-left-sidebar.html">
                            Latest News
                          </a>
                        </h6>
                        <p className="font-roboto mb-0">
                          <a href="blog-detail-right-sidebar.html">
                            Residences can be classified and connected to
                            residences..
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="footer-social sub-footer-link">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://accounts.google.com/">
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 text-end">
              <div className="copy-right">
                <p className="mb-0">
                  Copyright 2022 Sheltos By <i data-feather="heart"></i>{" "}
                  Pixelstrap
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
