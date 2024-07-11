import { Heading, Img, Button, Text } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col self-stretch justify-between items-center gap-5 p-[21px] sm:p-4 bg-blue_gray-100`}
    >
      <Img
        src="images/img_header_logo.png"
        alt="headerlogo"
        className="mb-[5px] ml-[35px] h-[30px] w-[91px] object-contain"
      />
      <div className="mr-1.5 flex w-[43%] items-end justify-between">
        <ul className="!mb-[7px] flex flex-wrap gap-[11px]">
          <li>
            <a href="#">
              <Text as="p">Products</Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p">Home</Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p">My Profile</Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p">About</Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p">Contact</Text>
            </a>
          </li>
        </ul>
        <Button className="flex h-[40px] min-w-[105px] flex-row items-center justify-center rounded-[10px] bg-lime-800_01 px-[30px] text-center text-base text-white-a700 lg:text-[13px] sm:px-4">
          signIn
        </Button>
        <div className="relative h-[38px] w-[6%] pb-0.5 pl-0.5 sm:w-full">
          <a href="#">
            <Img
              src="images/img_cart.svg"
              alt="cart"
              className="absolute bottom-[4.18px] left-[2.29px] m-auto h-[29px]"
            />
          </a>
          <Heading
            size="headingxs"
            as="p"
            className="absolute right-[0.14px] top-[0.00px] m-auto h-[16px] w-[17px] rounded-lg bg-gradient px-[5px] py-px !font-lato !text-white-a700"
          >
            3
          </Heading>
        </div>
      </div>
    </header>
  );
}
