import { useRouter } from "next/router";
import React from "react";
import { FaFeather } from "react-icons/fa";

export default function SidebarTweetButton() {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex justify-center items-center bg-sky-500 hover:bg-opacity-80 transition-all cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 rounded-full px-4 py-2 flex justify-center items-center bg-sky-500 hover:bg-opacity-80 transition-all cursor-pointer">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
}
