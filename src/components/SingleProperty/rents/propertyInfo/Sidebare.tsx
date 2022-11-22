import React, { Dispatch, FC, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import DatePicker from "react-datepicker";

interface SidebareProps {
  checkInDate: Date | null;
  setCheckInDate: Dispatch<React.SetStateAction<Date | null>>;
  checkOutDate: Date | null;
  setCheckOutDate: Dispatch<React.SetStateAction<Date | null>>;
  isNotLaptop: boolean;
  onChange: (dates: [Date | null, Date | null]) => void;
}
const Sidebare: FC<SidebareProps> = ({
  checkInDate,
  checkOutDate,
  isNotLaptop,
  setCheckInDate,
  setCheckOutDate,
  onChange,
}) => {
  return (
    <div className="col-xl-3 col-lg-4">
      <div className="left-sidebar !tw-p-6 sticky-cls single-sidebar">
        <div className="filter-cards">
          <div className="advance-card">
            <div className="tw-flex tw-justify-between tw-flex-wrap">
              <h6 className="!tw-font-bold !tw-text-base">
                {Number(100000).toLocaleString("fr-Fr", {
                  style: "currency",
                  currency: "XOF",
                })}
                <span className="!tw-font-normal"> Nuit</span>
              </h6>
              <h1 className="!tw-font-bold !tw-text-base tw-flex tw-items-center">
                <FaStar className="!tw-text-sm tw-mr-1 tw-mb-[3px]" /> 5.0{" "}
                <span className="tw-underline !tw-tex-sm tw-text-darkgray tw-ml-1">
                  {" "}
                  9.reviews
                </span>
              </h1>
            </div>
          </div>
          <div className="advance-card !tw-mt-2">
            <div className="row gx-2 date-picker">
              <div className="col-12">
                <div className="dropdown !tw-border-[#797474] !tw-rounded-md  tw-p-2">
                  <div className="tw-flex tw-justify-center tw-pt-3 ">
                    <span className="tw-font-semibold tw-pr-2  tw-border-r">
                      Check In
                    </span>
                    <span className="tw-font-semibold tw-pl-2  tw-border-l">
                      Check Out
                    </span>
                  </div>
                  <DatePicker
                    className="dropdown-toggle font-rubik !tw-w-full tw-text-center "
                    onChange={onChange}
                    selected={checkInDate}
                    endDate={checkOutDate}
                    startDate={checkInDate}
                    minDate={new Date()}
                    id="datepick"
                    selectsRange
                    monthsShown={isNotLaptop ? 1 : 2}
                  />
                </div>
              </div>
              <div className="col-12 !tw-mb-0">
                <div className="dropdown !tw-p-2 !tw-border-[#797474]">
                  <span
                    className="dropdown-toggle font-rubik"
                    data-bs-toggle="dropdown"
                  >
                    <span>Property Status</span>{" "}
                    <i className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu text-start">
                    <a className="dropdown-item" href="javascript:void(0)">
                      Property Status
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      For Rent
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      For Sale
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <a
                  href="list-left-sidebar.html"
                  className="btn btn-gradient !tw-py-3 color-2 btn-block tw-w-full mt-2"
                >
                  Reserver
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebare;
