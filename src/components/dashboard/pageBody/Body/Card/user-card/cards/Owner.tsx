import React from "react";
import { OwnerIcon } from "components/icons/index";
import { Plus } from "react-feather";
import Link from "next/link";
const Owner = () => {
  return (
    <Link href="/dashboard/add-user-wizard?owner=owner">
      <div className="card tw-cursor-pointer hover:-tw-translate-y-2 tw-group hover:tw-scale-[1.025] tw-transition-all tw-duration-500">
        <div className="card-body">
          <div className="media">
            <div className="widget-icon group-hover:tw-bg-lightgreen tw-bg-lightgray ">
              <OwnerIcon className="!tw-h-[32px] !tw-w-[32px] tw-text-darkgray group-hover:!tw-text-green-700 !tw-m-0" />
            </div>
            <div className="media-body">
              <span>
                <span className="font-success">Je suis</span>
              </span>
              <h4>Un Propriétaire</h4>
            </div>
            <span className="status-history">
              <Plus className="tw-text-2xl group-hover:tw-text-emerald-500 group-hover:!tw-font-bold" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Owner;
