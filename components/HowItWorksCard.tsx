/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  title: string;
  content: string;
  imagePath: string;
  className?: string;
};

export const HowItWorksCard: React.FC<Props> = (props) => {
  const { className = "", title, content, imagePath } = props;

  return (
    <div
      className={`h-full rounded-[20px] px-4 pt-10 pb-4 flex flex-col items-start gap-4 ${className}`}
    >
      <h4 className="text-[24px] leading-[29.05px] font-semibold">{title}</h4>

      <p className="text-[20px] leading-[24.2px]">{content}</p>

      <img
        src={imagePath}
        alt=""
        className="w-full h-[232px] object-cover rounded-[18.46px]"
      />
    </div>
  );
};
