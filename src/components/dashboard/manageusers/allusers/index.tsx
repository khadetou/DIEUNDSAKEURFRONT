import TopBody from "./top-body";
import { useAppSelector } from "hooks/index";
import Image from "next/image";
import { initials } from "utils/index";

const BodyAllUser = () => {
  const { users } = useAppSelector((store) => store.auth);
  return (
    <div className="page-body">
      <TopBody />
      <div className="container-fluid">
        <div className="row agent-section property-section user-lists">
          <div className="col-lg-12">
            <div className="property-grid-3 agent-grids ratio2_3">
              <div className="property-2 row column-sm property-label property-grid list-view">
                {users &&
                  users.map(({ image, firstname, lastname }: any, idx: any) => (
                    <div className="col-md-12 col-xl-6" key={idx}>
                      <div className="property-box">
                        <div
                          className="agent-image tw-relative !tw-bg-cover !tw-bg-center !tw-bg-no-repeat"
                          style={{
                            backgroundImage: `url(${image.url})`,
                          }}
                        >
                          <div>
                            {image.url ? (
                              <Image
                                src={image.url}
                                width={image.width}
                                height={image.height}
                                className="bg-img tw-hidden"
                                alt=""
                              />
                            ) : (
                              <div className="tw-rounded-md tw-p-4 tw-mr-2 tw-font-bold tw-text-base tw-bg-red-600 tw-text-white tw-cursor-pointer">
                                {initials(firstname, lastname)}
                              </div>
                            )}
                            <span className="label label-shadow">New user</span>
                            <div className="agent-overlay"></div>
                            <div className="overlay-content">
                              <ul>
                                <li>
                                  <a href="https://www.google.com/">
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
                          <h5>Zack Lee</h5>
                          <p className="font-roboto">Real estate User</p>
                          <ul className="agent-contact">
                            <li>
                              <i className="fas fa-phone-alt"></i>
                              <span className="phone-number">
                                +91 426015400
                              </span>
                              <span className="character">+91 42601****</span>
                              <span className="label label-light label-flat color-4">
                                show
                                <span>hide</span>
                              </span>
                            </li>
                            <li>
                              <i className="fas fa-envelope"></i> zack@gmail.com
                            </li>
                            <li>
                              <i className="fas fa-fax"></i> 247 054 787
                            </li>
                          </ul>
                          <a href="user-profile.html">
                            View profile <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAllUser;
