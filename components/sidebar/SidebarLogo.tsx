import { useRouter } from "next/router";
import React from "react";
import { BsTwitter } from "react-icons/bs";

export default function SidebarLogo() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="rounded-full h-14 w-14 p-4 items-center flex justify-center hover:bg-opacity-10 cursor-pointer transition-all"
    >
      <BsTwitter size={28} color="white " />
    </div>
  );
}
