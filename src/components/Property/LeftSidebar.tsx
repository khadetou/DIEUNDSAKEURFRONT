import React, { useState } from "react";
import InputRange from "react-input-range";
import { Data } from "utils/interface";
import { useRouter } from "next/router";

const LeftSidebar = () => {
  const [value, setValue] = useState<any>({ min: 2000000, max: 10000000 });
  const [value1, setValue1] = useState<any>({ min: 100, max: 800 });

  const [filter, setFilter] = useState<Data>({
    bath: "",
    keyword: "",
    beds: "",
    location: "",
    pageNumber: "",
    pageSize: "",
    region: "",
    rooms: "",
    status: "",
    type: "",
  });

  const { push } = useRouter();

  const {
    bath,
    keyword,
    beds,
    location,
    pageNumber,
    region,
    rooms,
    status,
    type,
  } = filter;

  const onSubmit = () => {
    push(
      `property?keyword=${keyword}&pageNumber=${pageNumber}&type=${type}&status=${status}&min=${value.min}&max=${value.max}&mina=${value1.min}&maxa=${value1.max}$bath=${bath}$beds=${beds}$rooms=${rooms}&region=${region}&location=${location}`
    );
  };

  return (
    <div className="col-xl-3 col-lg-4">
      <div className="left-sidebar">
        <div className="filter-cards">
          <div className="advance-card">
            <div className="back-btn d-lg-none d-block">Back</div>
            <h5 className="mb-0 advance-title">Advance search </h5>
          </div>
          <div className="advance-card">
            <h6 className="!tw-mb-[30px]">filter</h6>
            <div className="row gx-2">
              <div className="col-12">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>{status === "RENT" ? "A Louer" : "A Vendre"}</span>{" "}
                    <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a
                      className="dropdown-item"
                      onClick={() =>
                        setFilter({ ...filter, ["status"]: "RENT" })
                      }
                    >
                      A Louer
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() =>
                        setFilter({ ...filter, ["status"]: "SELL" })
                      }
                    >
                      A Vendre
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>{type === "" ? "Type de Logement" : type}</span>{" "}
                    <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a
                      className="dropdown-item"
                      onClick={() =>
                        setFilter({ ...filter, ["type"]: "Appartement" })
                      }
                    >
                      Apartment
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() =>
                        setFilter({ ...filter, ["type"]: "Maison De Famille" })
                      }
                    >
                      Family House
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() =>
                        setFilter({ ...filter, ["type"]: "Cottage" })
                      }
                    >
                      Cottage
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() =>
                        setFilter({ ...filter, ["type"]: "Condominium" })
                      }
                    >
                      Condominium
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>{region === "" ? "Localité" : region}</span>{" "}
                    <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a
                      className="dropdown-item"
                      onClick={() =>
                        setFilter({ ...filter, ["region"]: "Dakar" })
                      }
                    >
                      Dakar
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() =>
                        setFilter({ ...filter, ["region"]: "Kaolack" })
                      }
                    >
                      Kaolack
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() =>
                        setFilter({ ...filter, ["region"]: "Ziguinchor" })
                      }
                    >
                      Ziguinchor
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() =>
                        setFilter({ ...filter, ["region"]: "Saint Louis" })
                      }
                    >
                      Saint Louis
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>Chambre: {rooms === "" ? "" : rooms}</span>{" "}
                    <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["rooms"]: "1" })}
                    >
                      1
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["rooms"]: "2" })}
                    >
                      2
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["rooms"]: "3" })}
                    >
                      3
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["rooms"]: "4" })}
                    >
                      4
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["rooms"]: "5" })}
                    >
                      5
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["rooms"]: "6" })}
                    >
                      6
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>Lits: {beds === "" ? "" : beds}</span>{" "}
                    <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["beds"]: "1" })}
                    >
                      1
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["beds"]: "2" })}
                    >
                      2
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["beds"]: "3" })}
                    >
                      3
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["beds"]: "4" })}
                    >
                      4
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>Toilette: {bath === "" ? "" : bath}</span>{" "}
                    <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["bath"]: "1" })}
                    >
                      1
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["bath"]: "2" })}
                    >
                      2
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["bath"]: "3" })}
                    >
                      3
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={() => setFilter({ ...filter, ["bath"]: "4" })}
                    >
                      4
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="dropdown">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>Agencies</span> <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a className="dropdown-item" href="javascript:void(0)">
                      Agencies
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Lincoln
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Blue Sky
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Zephyr
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      Premiere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <div className="price-range">
                    <label htmlFor="amount">Price : </label>
                    <span className="tw-bg-transparent tw-text-[#586167] tw-max-w-[95px] tw-py-[1px] tw-px-[2px] tw-ml-1 tw-font-sans">{`${Number(
                      value.min
                    ).toLocaleString("fr-FR", {
                      style: "currency",
                      currency: "XOF",
                    })} - ${Number(value.max).toLocaleString("fr-FR", {
                      style: "currency",
                      currency: "XOF",
                    })}`}</span>
                    <InputRange
                      minValue={1000000}
                      maxValue={10000000000}
                      value={value}
                      onChange={(value: any) => setValue(value)}
                      classNames={{
                        valueLabel: "1 tw-hidden",
                        activeTrack:
                          "2 tw-bg-[#d70000] tw-left-0 tw-mt-[-0.15rem] tw-absolute tw-right-0 tw-top-[50%] tw-rounded-[0.3rem] tw-cursor-pointer tw-block tw-h-[0.3rem] tw-tras tw-transition-[left,_width] tw-duration-300 tw-ease-out",
                        disabledInputRange: "3",
                        inputRange: "4 tw-h-4 tw-relative tw-w-full",
                        labelContainer: "5 tw-hidden",
                        maxLabel: "6 tw-hidden",
                        minLabel: "7 tw-hidden",
                        slider:
                          "8 tw-appearance-none tw-bg-[#d70000] tw-border tw-border-[#d70000] tw-rounded-full tw-cursor-pointer tw-block tw-h-4 -tw-ml-[0.5rem] -tw-mt-[0.38rem] tw-outline-none tw-absolute tw-top-1/2 tw-transition-[transform,_box-shadow] tw-duration-300 tw-ease-out tw-w-4 active:tw-scale-[1.3]",
                        sliderContainer:
                          "9 tw-transition-[left] tw-duration-300 tw-ease-out ",
                        track:
                          "10 tw-left-0 tw-mt-[-0.15rem] tw-absolute tw-right-0 tw-top-[50%] tw-rounded-[0.3rem] tw-cursor-pointer tw-block tw-h-[0.3rem] tw-tras tw-bg-[#eeeeee] tw-transition-[left,_width] tw-duration-300 tw-ease-out",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <div className="price-range">
                    <label htmlFor="amount">Area : </label>
                    <span className="tw-bg-transparent tw-text-[#586167] tw-max-w-[95px] tw-py-[1px] tw-px-[2px] tw-ml-1 tw-font-sans">{`${value1.min} m² - ${value1.max} m²`}</span>
                    <InputRange
                      minValue={0}
                      maxValue={10000}
                      value={value1}
                      onChange={(value: any) => setValue1(value)}
                      classNames={{
                        valueLabel: "1 tw-hidden",
                        activeTrack:
                          "2 tw-bg-[#d70000] tw-left-0 tw-mt-[-0.15rem] tw-absolute tw-right-0 tw-top-[50%] tw-rounded-[0.3rem] tw-cursor-pointer tw-block tw-h-[0.3rem] tw-tras tw-transition-[left,_width] tw-duration-300 tw-ease-out",
                        disabledInputRange: "3",
                        inputRange: "4 tw-h-4 tw-relative tw-w-full",
                        labelContainer: "5 tw-hidden",
                        maxLabel: "6 tw-hidden",
                        minLabel: "7 tw-hidden",
                        slider:
                          "8 tw-appearance-none tw-bg-[#d70000] tw-border tw-border-[#d70000] tw-rounded-full tw-cursor-pointer tw-block tw-h-4 -tw-ml-[0.5rem] -tw-mt-[0.38rem] tw-outline-none tw-absolute tw-top-1/2 tw-transition-[transform,_box-shadow] tw-duration-300 tw-ease-out tw-w-4 active:tw-scale-[1.3]",
                        sliderContainer:
                          "9 tw-transition-[left] tw-duration-300 tw-ease-out ",
                        track:
                          "10 tw-left-0 tw-mt-[-0.15rem] tw-absolute tw-right-0 tw-top-[50%] tw-rounded-[0.3rem] tw-cursor-pointer tw-block tw-h-[0.3rem] tw-tras tw-bg-[#eeeeee] tw-transition-[left,_width] tw-duration-300 tw-ease-out",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-6">
                    <a
                      onClick={onSubmit}
                      className="btn btn-gradient color-2 btn-block btn-pill mt-2"
                    >
                      Search{" "}
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      onClick={() => push("/property")}
                      className="btn btn-gradient color-2 btn-block btn-pill mt-2"
                    >
                      Reset{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="advance-card">
            <h6 className="!tw-mb-[30px]">Category</h6>
            <div className="category-property">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-arrow-right me-2"></i>Apartment{" "}
                    <span className="float-end">(15)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-arrow-right me-2"></i>Villa{" "}
                    <span className="float-end">(10)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-arrow-right me-2"></i>Family House{" "}
                    <span className="float-end">(8)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-arrow-right me-2"></i>Town House{" "}
                    <span className="float-end">(5)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-arrow-right me-2"></i>Offices{" "}
                    <span className="float-end">(12)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-arrow-right me-2"></i>Duplexes{" "}
                    <span className="float-end">(3)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="advance-card">
            <h6 className="!tw-mb-[30px]">Contact Info</h6>
            <div className="category-property">
              <ul>
                <li>
                  <i data-feather="map-pin" className="me-2"></i>A-32, Albany,
                  Newyork.
                </li>
                <li>
                  <i data-feather="phone-call" className="me-2"></i>
                  (+066) 518 - 457 - 5181
                </li>
                <li>
                  <i data-feather="mail" className="me-2"></i>
                  Contact@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="advance-card">
            <h6 className="!tw-mb-[30px]">Recently Added</h6>
            <div className="recent-property">
              <ul>
                <li>
                  <div className="media">
                    <img
                      src="/images/property/9.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="media-body">
                      <h5>Sea Breezes</h5>
                      <span>
                        $9800 / <span>Month</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media">
                    <img
                      src="/images/property/10.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="media-body">
                      <h5>Orchard House</h5>
                      <span>
                        $7500 / <span>Month</span>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media">
                    <img
                      src="/images/property/11.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="media-body">
                      <h5>Neverland</h5>
                      <span>
                        $5000 / <span>Month</span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
