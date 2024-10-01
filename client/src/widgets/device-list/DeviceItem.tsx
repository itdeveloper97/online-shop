import React from "react";
import { Device } from "src/shared/types/device";
import { Card } from "src/shared/ui/card/Card";
import { StarSvg } from "src/shared/svg/StarSvg";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "src/shared/utils/consts";
import * as process from "process";
import { Image } from "@mantine/core";

type Props = {
  device: Device;
};
export const DeviceItem = ({ device }: Props) => {
  const navigate = useNavigate();
  const handleGoToDevice = () => {
    navigate(DEVICE_ROUTE + "/" + device.id);
  };

  return (
    <Card
      className={
        "lg:p-4 cursor-pointer 2xl:w-full hover:scale-105 transition-all"
      }
      onClick={handleGoToDevice}
    >
      <div className={"flex flex-col gap-1"}>
        <Image src={process.env.REACT_APP_API_URL + device.img} alt="Device" />
        <div className={"flex justify-between align-middle"}>
          <div className={"text-gray-500"}>Samsung...</div>
          <div className={"flex align-middle gap-1"}>
            <div>{device.rating}</div>
            <StarSvg />
          </div>
        </div>
        <div>{device.name}</div>
      </div>
    </Card>
  );
};
