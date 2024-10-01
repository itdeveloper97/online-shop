import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "src/store/hooks/useStore";
import { DeviceItem } from "src/widgets/device-list/DeviceItem";

export const DeviceList = observer(() => {
  const { device } = useStore();

  return (
    <div className={"grid grid-cols-4 gap-2"}>
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
});
