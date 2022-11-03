import React from "react";
import { Airplay, User, LogOut } from "react-feather";
import Link from "next/link";
import { useAppDispatch } from "hooks/index";
import { logout } from "redux/auth/authSlice";
const Profile = () => {
  const dispatch = useAppDispatch();
  return (
    <ul className="profile-dropdown onhover-show-div tw-p-5 tw-w-52 !tw-top-[41px] ">
      <li className="tw-w-full">
        <Link
          href="/dashboard/user-profile"
          className="tw-flex tw-items-center tw-justify-between tw-w-full"
        >
          <span className="tw-text-black tw-font-medium">Mon Compte</span>
          <User />
        </Link>
      </li>
      <li className="tw-w-full">
        <Link
          href="/dashboard"
          className="tw-flex tw-justify-between tw-w-full tw-mt-2"
        >
          <span className="tw-text-black tw-font-medium">Dashboard</span>
          <Airplay />
        </Link>
      </li>
      <li className="tw-w-full">
        <a
          onClick={() => dispatch(logout())}
          className="tw-flex tw-cursor-pointer tw-justify-between tw-w-full tw-mt-2"
        >
          <span className="tw-text-black tw-font-medium">Se Deconnecter</span>
          <LogOut />
        </a>
      </li>
    </ul>
  );
};

export default Profile;
