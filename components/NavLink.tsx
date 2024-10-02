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
          isActive ? "bg-[#228B22]" : "bg-transparent"
        } cursor-pointer transition-colors duration-300 w-fit rounded-[32px] py-2 px-4 text-[20px] text-white leading-[24px]`}
        type="button"
      >
        {label}
      </button>
    </Link>
  );
};
