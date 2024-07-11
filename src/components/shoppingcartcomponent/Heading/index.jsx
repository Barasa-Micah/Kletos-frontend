import React from "react";

const sizes = {
  headingxs: "text-xs font-bold",
  headings: "text-[15px] font-semibold",
  headingmd: "text-base font-bold lg:text-[13px]",
  headinglg: "text-lg font-semibold lg:text-[15px]",
  headingxl: "text-xl font-semibold lg:text-[17px]",
  heading2xl: "text-[21px] font-semibold lg:text-[17px]",
};

const Heading = ({ children, className = "", size = "headingxl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
