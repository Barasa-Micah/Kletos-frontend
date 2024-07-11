import React from "react";

const sizes = {
  textxs: "text-base font-normal not-italic lg:text-[13px]",
  texts: "text-xl font-light lg:text-[17px]",
  textmd: "text-[64px] font-normal not-italic lg:text-[64px] md:text-5xl",
};

const Text = ({ children, className = "", as, size = "textxs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
