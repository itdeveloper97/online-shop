import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "src/store/hooks/useStore";
import { toJS } from "mobx";
import classNames from "classnames";

export const TypeBar = observer(() => {
  const { device } = useStore();

  return (
    <div
      className={classNames(
        "flex flex-col border-solid border-[2px] border-gray-400 gap-[1px] bg-gray-400 rounded h-fit",
      )}
    >
      {device.types.map((type) => (
        <div
          className={classNames(
            "p-4 bg-gray-200 first:rounded-t last:rounded-b hover:bg-gray-300 cursor-pointer text-gray-700",
            {
              "bg-gray-400 hover:bg-gray-400 text-black":
                type.id === device.selectedType?.id,
            },
          )}
          key={type.id}
          onClick={() => device.setSelectedType(type)}
        >
          {type.name}
        </div>
      ))}
    </div>
  );
});
