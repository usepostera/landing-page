import React from "react";

type Props = {
  text: string;
};

export const PageSubTitle: React.FC<Props> = (props) => {
  const { text } = props;

  return (
    <div className="w-fit rounded-[40px] bg-[#D9D9D9] px-4 py-1 text-[14px] leading-[16.94px]">
      {text}
    </div>
  );
};
