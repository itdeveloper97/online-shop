import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import classNames from "classnames";

export type PropsInput = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export const Input = ({ className, ...props }: PropsInput) => {
  return <input className={classNames(cn, className)} {...props} />;
};

const cn =
  "block w-full py-3 px-1 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200";
