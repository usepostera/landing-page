"use client";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "./NavLink";
import Logo from "@/app/assets/svgs/logo-transparent-2.svg";
import { IoIosMenu } from "react-icons/io";
import useDeviceView from "@/hooks/useDeviceView";
import { MobileNavMenu } from "./MobileNavMenu";
import Link from "next/link";

export const AppHeader: React.FC = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const isMobile = useDeviceView();

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  return (
    <>
      {isMobile && (
        <MobileNavMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      )}

      <header
        className={`z-50 fixed top-0 left-0 w-full md:py-4 bg-white transition-transform duration-300 md:h-[100px] ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto md:bg-[#F2F2F2] rounded-[200px] py-2 px-4 md:px-8">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <Logo height={50} width={50} />
              <h1 className="text-xl">Postera</h1>
            </div>

            <div className="hidden md:block bg-[#000000] py-2 px-4 h-full rounded-[60px] gap-4">
              <NavLink label="Home" path="/" isActive />

              <NavLink label="About" />

              <NavLink label="Service" />

              <NavLink label="FAQs" />
            </div>

            <div className="hidden md:block bg-[#000000] py-2 px-4 h-full rounded-[60px] gap-4">
              <Link href={"https://app.usepostera.com"} target="_blank">
                <button
                  className={
                    "bg-white cursor-pointer transition-colors duration-300 w-fit rounded-[32px] py-2 px-4 text-[20px] text-black leading-[24px]"
                  }
                  type="button"
                >
                  Sign up
                </button>
              </Link>

              <button
                className={
                  "bg-transparent cursor-pointer transition-colors duration-300 w-fit rounded-[32px] py-2 px-4 text-[20px] text-white leading-[24px]"
                }
                type="button"
              >
                Sign in
              </button>
            </div>

            <div className="block md:hidden">
              <button type="button" title="Menu" onClick={openMenu}>
                <IoIosMenu color="#000000" size={30} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
