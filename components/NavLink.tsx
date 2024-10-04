import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  path?: string;
  isActive?: boolean;
};

export const NavLink: React.FC<Props> = (props) => {
  const { label, path, isActive = false } = props;

  return (
    <Link href={path || "#"}>
      <button
        className={`${
          isActive
            ? "text-white bg-[#228B22]"
            : "bg-transparent text-black md:text-white"
        } cursor-pointer transition-colors duration-300 w-fit rounded-[32px] py-2 px-4 font-normal text-[20px] leading-[24px]`}
        type="button"
      >
        {label}
      </button>
    </Link>
  );
};
