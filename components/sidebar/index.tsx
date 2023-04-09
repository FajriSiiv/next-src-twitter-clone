import React from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
import userCurrentUser from "@/hooks/useCurrentUser";

import { signOut } from "next-auth/react";

export default function Sidebar() {
  const { data: currentUser } = userCurrentUser();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notification",
      href: "/notification",
      icon: BsBellFill,
      auth: true,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: FaUser,
      auth: true,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.label}
              onClick={() => {}}
              href={item.href}
              label={item.label}
              icon={item.icon}
              auth={item.auth}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              // href="asd"
              label="Logout"
              icon={BiLogOut}
            />
          )}

          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
}
