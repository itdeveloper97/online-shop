import { Pagination } from "@mantine/core";
import React from "react";
import { useStore } from "src/store/hooks/useStore";
import { observer } from "mobx-react-lite";

export const DevicePages = observer(() => {
  const { device } = useStore();

  return device.totalItems ? (
    <div className={"flex align-middle justify-center"}>
      <Pagination
        total={device.pages}
        value={device.page}
        onChange={(value) => device.setPage(value)}
      />
    </div>
  ) : null;
});
