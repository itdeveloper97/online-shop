import React, { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import classNames from "classnames";

export type PropsLabel = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export const Label = ({ className, children, ...props }: PropsLabel) => {
  return (
    <label className={classNames(cn, className)} {...props}>
      {children}
    </label>
  );
};

const cn = "block text-xs font-semibold text-gray-600 uppercase";
