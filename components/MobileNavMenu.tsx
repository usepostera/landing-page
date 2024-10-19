import React from "react";
import { AppBottomSheetWrapper } from "./AppBottomSheet";
import { NavLink } from "./NavLink";
import Logo from "@/app/assets/svgs/logo-transparent-2.svg";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
};

export const MobileNavMenu: React.FC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <AppBottomSheetWrapper isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-14 items-center">
        <div className="flex flex-col items-center gap-4">
          <NavLink label="Home" path="/" isActive />

          <NavLink label="About" />

          <NavLink label="Service" />

          <NavLink label="FAQs" />

          <div className="bg-[#000000] py-2 px-4 h-full rounded-[60px] gap-4">
            <Link href={"https://app.usepostera.com"} target="_blank">
              <button
                className={
                  "bg-white cursor-pointer transition-colors duration-300 w-fit rounded-[32px] py-2 px-4 text-[16px] text-black leading-[19.2px]"
                }
                type="button"
              >
                Sign up
              </button>
            </Link>

            <button
              className={
                "bg-transparent cursor-pointer transition-colors duration-300 w-fit rounded-[32px] py-2 px-4 text-white text-[16px] leading-[19.2px]"
              }
              type="button"
            >
              Sign in
            </button>
          </div>
        </div>

        <div>
          <div className="flex flex-row gap-2 items-center">
            <Logo height={50} width={50} />
            <h1 className="text-xl">Postera</h1>
          </div>
        </div>
      </div>
    </AppBottomSheetWrapper>
  );
};
