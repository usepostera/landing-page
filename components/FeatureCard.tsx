/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  imageUrl: string;
  text: string;
};

export const FeatureCard: React.FC<Props> = (props) => {
  const { imageUrl, text } = props;

  return (
    <div className="w-full h-[380px] md:h-[440px] relative overflow-hidden rounded-[20px]">
      <img
        src={imageUrl}
        alt=""
        className="z-10 absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="z-20 block text-white leading-[29.26px] md:leading-[43.57px] text-[24px] md:text-[36px] font-bold absolute bottom-[32px] left-[16px]">
        {text}
      </div>
    </div>
  );
};
