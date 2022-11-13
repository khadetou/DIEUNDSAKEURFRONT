import { useAppSelector } from "hooks/index";
import React, { useState } from "react";
import TopBody from "./top-body";
import Image from "next/image";

const BodyAllAgent = () => {
  const { agents } = useAppSelector((store) => store.agent);
  const [show, setShow] = useState(false);
  return (
    <div className="page-body">
      <TopBody />
      <div className="container-fluid">
        <div className="row agent-section property-section agent-lists">
          <div className="col-lg-12">
            <div className="ratio2_3">
              <div className="property-2 row column-sm property-label property-grid">
                {agents &&
                  agents.map(
                    (
                      {
                        image: { url },
                        firstname,
                        lastname,
                        phone,
                        email,
                      }: any,
                      idx: any
                    ) => (
                      <div key={idx} className="col-xl-4 col-md-6 wow fadeInUp">
                        <div className="property-box">
                          <div className="agent-image">
                            <div
                              className="bg-size tw-bg-cover tw-bg-no-repeat"
                              style={{
                                backgroundImage: `url(${url})`,
                              }}
                            >
                              <span className="label label-shadow">
                                2 properties
                              </span>
                              <div className="agent-overlay"></div>
                              <div className="overlay-content">
                                <ul>
                                  <li>
                                    <a href="https://accounts.google.com/">
                                      <img
                                        src="/images/about/icon-1.png"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://twitter.com/">
                                      <img
                                        src="/images/about/icon-2.png"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.facebook.com/">
                                      <img
                                        src="/images/about/icon-3.png"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                </ul>
                                <span>Connect</span>
                              </div>
                            </div>
                          </div>
                          <div className="agent-content">
                            <h3>
                              <a href="agent-profile.html">{`${firstname} ${lastname}`}</a>
                            </h3>
                            <p className="font-roboto">Agent Immobilier</p>
                            <ul className="agent-contact">
                              <li>
                                <i className="fas fa-phone-alt"></i>
                                <span className="phone-number">{phone}</span>
                                <span className="character">+221 77****</span>
                                <span className="label label-light label-flat color-2">
                                  show
                                  <span>hide</span>
                                </span>
                              </li>
                              <li>
                                <i className="fas fa-envelope"></i> {email}
                              </li>
                              <li>
                                <i className="fas fa-fax"></i> 33 247 054 787
                              </li>
                            </ul>
                            <a href="agent-profile.html">
                              View profile{" "}
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAllAgent;
