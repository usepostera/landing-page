import React from "react";

type Props = {
  path: string;
  radius: number;
  className?: string;
};

export const Avatar: React.FC<Props> = (props) => {
  const { path, radius, className } = props;

  return (
    <img
      src={path}
      alt="avatar"
      style={{
        borderRadius: radius,
        objectFit: "cover",
        height: radius * 2,
        width: radius * 2,
      }}
      className={`bg-gray-200 ${className}`}
    />
  );
};
