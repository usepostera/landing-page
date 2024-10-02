"use client";
import { useEffect, useState } from "react";
import { NavLink } from "./NavLink";
import Logo from "@/app/assets/svgs/logo-transparent-2.svg";

export const AppHeader: React.FC = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsHidden(true); // Hides header on scroll down
      } else {
        setIsHidden(false); // Shows header on scroll up
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Prevent negative scroll value
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <header
      className={`z-50 hidden md:block fixed top-0 left-0 w-full py-4 bg-white transition-transform duration-300 h-[100px] ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto bg-[#F2F2F2] rounded-[200px] py-2 px-8">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <Logo height={50} width={50} />
            <h1 className="text-xl">Postera</h1>
          </div>

          <div className="bg-[#000000] py-2 px-4 h-full rounded-[60px] gap-4">
            <NavLink label="Home" path="/" isActive />

            <NavLink label="About" />

            <NavLink label="Service" />

            <NavLink label="FAQs" />
          </div>

          <div className="bg-[#000000] py-2 px-4 h-full rounded-[60px] gap-4">
            <button
              className={
                "bg-white cursor-pointer transition-colors duration-300 w-fit rounded-[32px] py-2 px-4 text-[20px] text-black leading-[24px]"
              }
              type="button"
            >
              Sign up
            </button>

            <button
              className={
                "bg-transparent cursor-pointer transition-colors duration-300 w-fit rounded-[32px] py-2 px-4 text-[20px] text-white leading-[24px]"
              }
              type="button"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
