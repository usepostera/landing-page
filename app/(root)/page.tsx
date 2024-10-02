/* eslint-disable @next/next/no-img-element */
import Accordion from "@/components/Accordion";
import { Avatar } from "@/components/Avatar";
import { FeatureCard } from "@/components/FeatureCard";
import { HowItWorksCard } from "@/components/HowItWorksCard";
import { PageSubTitle } from "@/components/PageSubTitle";
import { RiArrowRightSLine } from "react-icons/ri";

import Recycle from "@/app/assets/svgs/recycle.svg";

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
  return (
    <>
      <section>
        <div className="container mx-auto py-8">
          <div className="flex flex-row gap-8">
            <div className="flex-1 pt-8 max-w-[519px] flex flex-col gap-4 items-start">
              <h1 className="text-[36px] font-semibold leading-[43.88px]">
                Transform Waste into Value with Blockchain-Driven Recycling
              </h1>

              <p className="text-[20px] leading-[24.38px]">
                Earn rewards for recycling while supporting a transparent and
                sustainable future.
              </p>

              <button
                className="cursor-pointer bg-black py-2 px-4 flex flex-row items-center rounded-[40px] gap-2"
                type="button"
              >
                <div className="bg-[#228B22] rounded-[40px] flex items-center justify-center px-2 py-1">
                  <RiArrowRightSLine color="#fff" size={18} />
                </div>
                <span className="text-white">Sign Up</span>
              </button>

              <div className="flex flex-row items-center">
                <Avatar
                  path="/images/avatar1.png"
                  radius={24}
                  className="bg-[#179300] z-[5]"
                />
                <Avatar
                  path="/images/avatar2.png"
                  radius={24}
                  className="bg-[#b190b6] z-[4] -ml-[10px]"
                />
                <Avatar
                  path="/images/avatar3.png"
                  radius={24}
                  className="bg-[#e9177c] z-[3] -ml-[10px]"
                />
                <Avatar
                  path="/images/avatar4.png"
                  radius={24}
                  className="bg-[#d80600] z-[2] -ml-[10px]"
                />
                <Avatar
                  path="/images/avatar5.png"
                  radius={24}
                  className="bg-[#228b23] -ml-[10px]"
                />

                <span className="text-[24px] ml-2 leading-[29.05px]">
                  300k+
                </span>
              </div>

              <p className="text-[20px] leading-[24.38px] -mt-2">
                People use our platform{" "}
              </p>
            </div>

            <div className="flex-1 relative">
              <div className="w-3/4 mx-auto relative">
                <div className="grid grid-cols-2 gap-[20px] w-fit absolute bottom-[85px] -left-[30px]">
                  <div className="h-[20px] w-[20px] bg-[#228B22] rounded-[10px]"></div>
                  <div className="h-[20px] w-[20px] bg-[#228B22] rounded-[10px]"></div>
                  <div className="h-[20px] w-[20px] bg-[#228B22] rounded-[10px]"></div>
                  <div className="h-[20px] w-[20px] bg-[#228B22] rounded-[10px]"></div>
                  <div className="h-[20px] w-[20px] bg-[#228B22] rounded-[10px]"></div>
                  <div className="h-[20px] w-[20px] bg-[#228B22] rounded-[10px]"></div>
                  <div className="h-[20px] w-[20px] bg-[#228B22] rounded-[10px]"></div>
                  <div className="h-[20px] w-[20px] bg-[#228B22] rounded-[10px]"></div>
                </div>
                <img
                  src="/images/image1.png"
                  className="w-full h-auto"
                  alt=""
                  loading="eager"
                />
              </div>

              <div className="w-full h-[97px] rounded-[20px] border-[1px] border-[#000000] -mt-[45px]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container mx-auto py-8">
          <div className="flex flex-col gap-4 items-center">
            <PageSubTitle text="How It Works" />

            <h1 className="text-[36px] font-semibold leading-[43.57px] text-center w-[684px]">
              Why should you use Recycle Pro to transform your waste
            </h1>

            <div className="w-full grid grid-cols-3 gap-4">
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

      <section className="mt-20">
        <div className="container mx-auto py-8">
          <div className="flex flex-col gap-4 items-center">
            <PageSubTitle text="Key features" />

            <h1 className="text-[36px] font-semibold leading-[43.57px] text-center w-[684px]">
              What makes us stand out among other platforms?
            </h1>

            <div className="w-full grid grid-cols-3 gap-4">
              <div className="col-span-2">
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
              <div className="col-span-2">
                <FeatureCard
                  imageUrl="/images/proof-of-action.png"
                  text="Proof of Action"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container mx-auto py-8">
          <div className="flex flex-col gap-4 items-center">
            <PageSubTitle text="FAQs" />

            <h1 className="text-[36px] font-semibold leading-[43.57px] text-center w-[684px]">
              Common questions you might need answered
            </h1>

            <div className="flex flex-col gap-4 mb-20">
              {FAQS.map((item, idx) => (
                <Accordion key={`faq-${idx}`} {...item} />
              ))}
            </div>

            <div className="w-full flex flex-row relative py-8 px-4 -mb-[100px]">
              <div className="absolute left-0 top-0 w-full h-full">
                <div className="relative overflow-hidden w-3/4 bg-[#D1E9CC] h-[372px] mx-auto rounded-[40px] flex flex-col items-center justify-center gap-4 px-20 py-10">
                  <p className="text-[24px] leading-[29.26px] font-semibold text-center">
                    Earn rewards for recycling while supporting a transparent
                    and sustainable future.
                  </p>

                  <p className="text-[20px] leading-[24.38px] text-center">
                    Start Recycling Today
                  </p>

                  <button
                    className="cursor-pointer bg-black py-2 px-4 flex flex-row items-center rounded-[40px] gap-2"
                    type="button"
                  >
                    <div className="bg-[#228B22] rounded-[40px] flex items-center justify-center px-2 py-1">
                      <RiArrowRightSLine color="#fff" size={18} />
                    </div>
                    <span className="text-white">Sign Up</span>
                  </button>

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

              <div className="flex-[1]">
                <img
                  src="/images/image2.png"
                  alt=""
                  className="rounded-[20px] object-cover h-[305px] w-full"
                />
              </div>
              <div className="flex-[2]"></div>
              <div className="flex-[1]">
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
