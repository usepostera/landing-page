/* eslint-disable @next/next/no-img-element */
"use client";
import Accordion from "@/components/Accordion";
import { Avatar } from "@/components/Avatar";
import { FeatureCard } from "@/components/FeatureCard";
import { HowItWorksCard } from "@/components/HowItWorksCard";
import { PageSubTitle } from "@/components/PageSubTitle";
import { RiArrowRightSLine } from "react-icons/ri";

import Recycle from "@/app/assets/svgs/recycle.svg";
import useDeviceView from "@/hooks/useDeviceView";
import Link from "next/link";

const FAQS = [
  {
    title: "What is blockchain recycling?",
    content:
      "Blockchain recycling uses decentralized technology to track and verify every recycling transaction, ensuring transparency and trust in the system. You can see exactly where your recyclables go and earn rewards for your efforts.",
  },
  {
    title: "How do I earn rewards?",
    content:
      "For every successful recycling transaction recorded on the blockchain, you'll receive tokens. These tokens can be redeemed for rewards, traded, or even used to support further environmental projects.",
  },
  {
    title: "How does blockchain improve recycling?",
    content:
      "Blockchain ensures that every step of the recycling process is transparent and secure, eliminating fraud and providing proof of each action.",
  },
  {
    title: "What kind of materials can I recycle?",
    content:
      "Our platform accepts a wide range of materials including plastics, metals, paper, and e-waste. Check the full list on our platform.",
  },
  {
    title: "How do I track my recycling efforts?",
    content:
      "You can monitor your recycling history and impact directly on the platform. Every action you take is verified and visible on the blockchain.",
  },
];

export default function HomePage() {
  const isMobile = useDeviceView();

  return (
    <>
      <section>
        <div className="container mx-auto py-8 px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 pt-8 max-w-[519px] flex flex-col gap-4 items-start">
              <h1 className="text-[24px] md:text-[36px] font-semibold leading-[29.26px] md:leading-[43.88px]">
                Transform Waste into Value with Blockchain-Driven Recycling
              </h1>

              <p className="text-[16px] md:text-[20px] leading-[19.5px] md:leading-[24.38px]">
                Earn rewards for recycling while supporting a transparent and
                sustainable future.
              </p>

              <Link href={"https://postera-web-app.pages.dev"} target="_blank">
                <button
                  className="cursor-pointer bg-black py-2 px-4 flex flex-row items-center rounded-[40px] gap-2"
                  type="button"
                >
                  <div className="bg-[#228B22] rounded-[40px] flex items-center justify-center px-2 py-1">
                    <RiArrowRightSLine color="#fff" size={18} />
                  </div>
                  <span className="text-white text-[16px] leading-[19.5px]">
                    Sign Up
                  </span>
                </button>
              </Link>

              <div className="flex flex-row items-center">
                <Avatar
                  path="/images/avatar1.png"
                  radius={isMobile ? 16 : 24}
                  className="!bg-[#179300] z-[5]"
                />
                <Avatar
                  path="/images/avatar2.png"
                  radius={isMobile ? 16 : 24}
                  className="!bg-[#b190b6] z-[4] -ml-[10px]"
                />
                <Avatar
                  path="/images/avatar3.png"
                  radius={isMobile ? 16 : 24}
                  className="!bg-[#e9177c] z-[3] -ml-[10px]"
                />
                <Avatar
                  path="/images/avatar4.png"
                  radius={isMobile ? 16 : 24}
                  className="!bg-[#d80600] z-[2] -ml-[10px]"
                />
                <Avatar
                  path="/images/avatar5.png"
                  radius={isMobile ? 16 : 24}
                  className="!bg-[#228b23] -ml-[10px]"
                />

                <span className="text-[16px] md:text-[24px] ml-2 leading-[19.36px] md:leading-[29.05px]">
                  300k+
                </span>
              </div>

              <p className="text-[16px] md:text-[20px] leading-[19.36px] md:leading-[24.38px] -mt-2">
                People use our platform
              </p>
            </div>

            <div className="flex-1 relative">
              <div className="w-4/5 md:w-3/4 mx-auto relative">
                <div className="grid grid-cols-2 gap-[10px] w-fit absolute bottom-[42.5px] md:bottom-[85px] -left-[15px] md:-left-[30px]">
                  <div className="h-[10px] md:h-[20px] w-[10px] md:w-[20px] bg-[#228B22] rounded-[5px] md:rounded-[10px]"></div>
                  <div className="h-[10px] md:h-[20px] w-[10px] md:w-[20px] bg-[#228B22] rounded-[5px] md:rounded-[10px]"></div>
                  <div className="h-[10px] md:h-[20px] w-[10px] md:w-[20px] bg-[#228B22] rounded-[5px] md:rounded-[10px]"></div>
                  <div className="h-[10px] md:h-[20px] w-[10px] md:w-[20px] bg-[#228B22] rounded-[5px] md:rounded-[10px]"></div>
                  <div className="h-[10px] md:h-[20px] w-[10px] md:w-[20px] bg-[#228B22] rounded-[5px] md:rounded-[10px]"></div>
                  <div className="h-[10px] md:h-[20px] w-[10px] md:w-[20px] bg-[#228B22] rounded-[5px] md:rounded-[10px]"></div>
                  <div className="h-[10px] md:h-[20px] w-[10px] md:w-[20px] bg-[#228B22] rounded-[5px] md:rounded-[10px]"></div>
                  <div className="h-[10px] md:h-[20px] w-[10px] md:w-[20px] bg-[#228B22] rounded-[5px] md:rounded-[10px]"></div>
                </div>

                <img
                  src="/images/image1.png"
                  className="w-full h-auto"
                  alt=""
                  loading="eager"
                />
              </div>

              <div className="w-full h-[56px] md:h-[97px] rounded-[20px] border-[1px] border-[#000000] -mt-[25px] md:-mt-[45px]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-20">
        <div className="container mx-auto py-8 px-4 md:px-0">
          <div className="flex flex-col gap-4 items-center">
            <PageSubTitle text="How It Works" />

            <h1 className="text-[24px] md:text-[36px] font-semibold leading-[29.26px] md:leading-[43.57px] text-center md:w-[684px]">
              Why should you use Recycle Pro to transform your waste
            </h1>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
              <HowItWorksCard
                title="Recycle"
                imagePath="/images/recycle.png"
                content="Put your recyclables up for pickups for the next pickup round"
                className="bg-[#D0D3FB]"
              />
              <HowItWorksCard
                title="Track"
                imagePath="/images/track.png"
                content="Follow the journey of your recycled items on the blockchain."
                className="bg-[#D1E9CC]"
              />
              <HowItWorksCard
                title="Earn"
                imagePath="/images/earn.png"
                content="Collect eco-tokens or rewards for each verified recycling action."
                className="bg-[#FBD0E5]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-20">
        <div className="container mx-auto py-8 px-4 md:px-0">
          <div className="flex flex-col gap-4 items-center">
            <PageSubTitle text="Key features" />

            <h1 className="text-[24px] md:text-[36px] font-semibold leading-[29.26px] md:leading-[43.57px] text-center md:w-[684px]">
              What makes us stand out among other platforms?
            </h1>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <FeatureCard
                  imageUrl="/images/blockchain-transparency.png"
                  text="Blockchain Transparency"
                />
              </div>
              <div>
                <FeatureCard
                  imageUrl="/images/earn-rewards.png"
                  text="Earn Rewards"
                />
              </div>

              <div>
                <FeatureCard
                  imageUrl="/images/environmental-impact.png"
                  text="Environmental Impact"
                />
              </div>
              <div className="md:col-span-2">
                <FeatureCard
                  imageUrl="/images/proof-of-action.png"
                  text="Proof of Action"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-20">
        <div className="container mx-auto py-8 px-4 md:px-0">
          <div className="flex flex-col gap-4 items-center">
            <PageSubTitle text="FAQs" />

            <h1 className="text-[24px] md:text-[36px] font-semibold leading-[29.26px] md:leading-[43.57px] text-center md:w-[684px]">
              Common questions you might need answered
            </h1>

            <div className="flex flex-col gap-4 md:mb-20">
              {FAQS.map((item, idx) => (
                <Accordion key={`faq-${idx}`} {...item} />
              ))}
            </div>

            <div className="w-full flex flex-row relative py-8 md:px-4 -mb-[150px] md:-mb-[100px]">
              <div className="md:absolute md:left-0 md:top-0 w-full md:h-full">
                <div className="relative overflow-hidden md:w-3/4 bg-[#D1E9CC] md:h-[372px] mx-auto rounded-[40px] flex flex-col items-center justify-center gap-4 md:px-20 py-10">
                  <p className="z-20 text-[20px] md:text-[24px] leading-[24.38px] md:leading-[29.26px] font-semibold text-center">
                    Earn rewards for recycling while supporting a transparent
                    and sustainable future.
                  </p>

                  <p className="text-[16px] md:text-[20px] leading-[19.5px] md:leading-[24.38px] text-center">
                    Start Recycling Today
                  </p>

                  <Link
                    href={"https://postera-web-app.pages.dev"}
                    target="_blank"
                  >
                    <button
                      className="cursor-pointer bg-black py-2 px-4 flex flex-row items-center rounded-[40px] gap-2 z-20"
                      type="button"
                    >
                      <div className="bg-[#228B22] rounded-[40px] flex items-center justify-center px-2 py-1">
                        <RiArrowRightSLine color="#fff" size={18} />
                      </div>
                      <span className="text-white text-[16px] leading-[19.5px]">
                        Sign Up
                      </span>
                    </button>
                  </Link>

                  <div className="absolute -left-[30px] top-[40%]">
                    <Recycle />
                  </div>

                  <div className="absolute -right-[20px] -top-[35px]">
                    <Recycle />
                  </div>

                  <div className="absolute left-[45%] -bottom-[45px]">
                    <Recycle />
                  </div>
                </div>
              </div>

              <div className="hidden md:block flex-[1]">
                <img
                  src="/images/image2.png"
                  alt=""
                  className="rounded-[20px] object-cover h-[305px] w-full"
                />
              </div>

              <div className="hidden md:block flex-[2]"></div>

              <div className="hidden md:block flex-[1]">
                <img
                  src="/images/image3.png"
                  alt=""
                  className="rounded-[20px] object-cover h-[305px] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
