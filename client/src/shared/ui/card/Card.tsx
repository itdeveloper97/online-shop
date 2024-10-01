import React, { PropsWithChildren, ReactNode } from "react";
import classNames from "classnames";

type Props = {
  title?: ReactNode;
  className?: string;
  onClick?: () => void;
};
export const Card = (props: PropsWithChildren<Props>) => {
  const { title, className, onClick, children } = props;

  return (
    <div className={classNames(cn, className)} onClick={onClick}>
      {title && (
        <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
};

const cn =
  "p-12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg";
