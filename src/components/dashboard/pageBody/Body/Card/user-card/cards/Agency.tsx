import React from "react";
import { Plus } from "react-feather";
import { Home } from "components/icons/index";
import Link from "next/link";

const Agency = () => {
  return (
    <Link href="/dashboard/add-user-wizard?agency=agency">
      <div className="card tw-cursor-pointer hover:-tw-translate-y-2 tw-group hover:tw-scale-[1.025] tw-transition-all tw-duration-500">
        <div className="card-body">
          <div className="media">
            <div className="widget-icon group-hover:tw-bg-lightred tw-bg-lightgray ">
              <Home className="!tw-h-[30px] !tw-w-[30px] tw-text-darkgray group-hover:!tw-text-red-600 !tw-m-0" />
            </div>
            <div className="media-body">
              <span>Je suis</span>
              <h4> Un Agence</h4>
            </div>
            <span className="status-history">
              <Plus className="tw-text-2xl group-hover:tw-text-red-600 group-hover:!tw-font-bold" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Agency;
