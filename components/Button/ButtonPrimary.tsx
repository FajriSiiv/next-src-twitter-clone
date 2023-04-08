import React from "react";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  outline?: boolean;
  disable?: boolean;
}

export default function ButtonPrimary({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  outline,
  disable,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-70 transition-all border-2 ${
        fullWidth ? "w-full" : "w-fit"
      } ${secondary ? "bg-white" : "bg-sky-500"} ${
        secondary ? "text-black" : "text-white"
      }
       ${large ? "text-xl" : "text-md"}
       ${large ? "px-5" : "px-4"}
       ${large ? "py-3" : "py-2"}
       ${outline ? "bg-transparent" : ""}
       ${outline ? "border-white" : ""}
       ${outline ? "text-white" : ""}
      `}
    >
      {label}
    </button>
  );
}
