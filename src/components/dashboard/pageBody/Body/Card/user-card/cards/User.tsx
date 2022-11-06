import React from "react";
import { Plus } from "react-feather";
import { UserIcon } from "components/icons";
import Link from "next/link";

const User = () => {
  return (
    <Link href="/" className="hover:tw-text-dark">
      <div className="card tw-cursor-pointer hover:-tw-translate-y-2 tw-group hover:tw-scale-[1.025] tw-transition-all tw-duration-500">
        <div className="card-body">
          <div className="media">
            <div className="widget-icon tw-bg-lightgray group-hover:tw-bg-lightblue">
              <UserIcon className="tw-inline !tw-h-[30px] !tw-w-[30px] tw-text-darkgray group-hover:!tw-text-blue-700 !tw-m-0" />
            </div>
            <div className="media-body">
              <span>Je suis</span>
              <h4>Un client</h4>
            </div>
            <span className="status-history">
              <Plus className="tw-text-2xl group-hover:tw-text-blue-700 group-hover:!tw-font-bold" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default User;
