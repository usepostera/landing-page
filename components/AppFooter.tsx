import Logo from "@/app/assets/svgs/logo-transparent-2.svg";
import Link from "next/link";

import { CiInstagram } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

export const AppFooter: React.FC = () => {
  return (
    <footer className="pt-[150px] pb-8 bg-[#228B22]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between mb-[50px] gap-8">
          <div className="flex-1">
            <div className="flex flex-row items-center gap-2 mb-4">
              <Logo height={50} width={50} />

              <div className="text-[36px] font-bold leading-[43.57px] text-white">
                Postera
              </div>
            </div>

            <p className="text-white text-[20px] leading-[24.38px] mb-4 max-w-[468px]">
              Earn rewards for recycling while supporting a transparent and
              sustainable future. Start Recycling Today
            </p>

            <div className="bg-[#000000] py-2 px-4 rounded-[60px] gap-4 w-fit">
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

          <div className="flex-1 pt-8 flex flex-row justify-between gap-8">
            <div>
              <Link
                href={"/"}
                className="block mb-6 text-white text-[20px] leading-[24px]"
              >
                Home
              </Link>
              <Link
                href={"#"}
                className="block mb-6 text-white text-[20px] leading-[24px]"
              >
                About
              </Link>
              <Link
                href={"#"}
                className="block mb-6 text-white text-[20px] leading-[24px]"
              >
                Services
              </Link>
              <Link
                href={"#"}
                className="block text-white text-[20px] leading-[24px]"
              >
                FAQs
              </Link>
            </div>

            <div>
              <Link href={"#"} className="block mb-6">
                <CiInstagram size={24} color="#ffffff" />
              </Link>
              <Link
                href={"https://x.com/Po_stera"}
                target="_blank"
                className="block mb-6"
              >
                <RiTwitterXLine size={24} color="#ffffff" />
              </Link>
              <Link href={"#"} className="block mb-6">
                <FaLinkedinIn size={24} color="#ffffff" />
              </Link>
              <Link href={"#"} className="block mb-6">
                <CiYoutube size={24} color="#ffffff" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-fit gap-4 mx-auto text-white text-[20px] leading-[24.2px]">
          <p>All right reserved</p>
          <p>Help</p>
          <p>Privacy policy</p>
          <p>Terms and conditions</p>
        </div>
      </div>
    </footer>
  );
};
