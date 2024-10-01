import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "src/store/hooks/useStore";
import classNames from "classnames";

export const BrandBar = observer(() => {
  const { device } = useStore();
  return (
    <div
      className={
        "flex flex-wrap border-solid border-[1px] border-gray-400 rounded h-fit w-fit gap-[1px] bg-gray-400"
      }
    >
      {device.brands.map((brand) => (
        <div
          key={brand.id}
          className={classNames(
            "min-w-32 text-center p-4 bg-gray-200 first:rounded-l last:rounded-r hover:bg-gray-300 cursor-pointer text-gray-700",
            {
              "bg-gray-400 hover:bg-gray-400 text-black":
                brand.id === device.selectedBrand?.id,
            },
          )}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </div>
      ))}
    </div>
  );
});
