import { Button, Image } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { StarSvg } from "src/shared/svg/StarSvg";
import { Card } from "src/shared/ui/card/Card";
import { useParams } from "react-router-dom";
import { fetchSingleDevice } from "src/shared/api/device/fetch-single-device";
import { Device } from "src/shared/types/device";
import * as process from "process";

// const device = {
//   id: 1,
//   name: "Iphone 12 pro",
//   price: 25000,
//   rating: 5,
//   img: "http://i1.wp.com/img-new.cgtrader.com/items/2759886/82d1b301c2/apple-iphone-12-pro-pacific-blue-3d-model-max-obj-3ds-fbx-c4d-ma.jpg",
// };
// const description = [
//   { id: 1, title: "RAM", description: "8GB" },
//   { id: 2, title: "Camera", description: "48MP" },
//   { id: 3, title: "Operation System", description: "IOS" },
//   { id: 4, title: "Display Size", description: "6.7" },
//   { id: 5, title: "Battery Type", description: "Not Detachable" },
// ];

export const DevicePage = () => {
  const [device, setDevice] = useState<Device | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchSingleDevice(id || "0").then(({ data }) => setDevice(data));
  }, [id]);

  if (!device) {
    return <div>Not a Device</div>;
  }
  return (
    <div
      className={
        "px-4 py-2 mx-auto md:px-6 lg:px-8 lg:w-lg grid grid-cols-12 gap-2"
      }
    >
      <Card
        className={
          "col-span-12 w-full 2xl:w-full grid grid-cols-12 gap-8 h-fit"
        }
      >
        <div className={"col-span-5 flex justify-center"}>
          <Image
            src={process.env.REACT_APP_API_URL + device.img}
            alt="Device"
          />
        </div>

        <div className={"col-span-7 h-full flex flex-col justify-between pt-4"}>
          <div>
            <div>
              <div className={"flex align-middle justify-between gap-2"}>
                <div className={"uppercase"}>{device.name}</div>
                <div className={"flex align-middle gap-1"}>
                  <div>{device.rating}</div>
                  <StarSvg />
                </div>
              </div>
              <div className={"text-gray-500"}>${device.price}</div>
            </div>
            <Divider />
            {device.info.map((item) => (
              <div
                className={"flex align-middle gap-2 odd:bg-gray-200 px-2"}
                key={item.id}
              >
                <div className={"w-1/4"}>{item.title}:</div>
                <div>{item.description}</div>
              </div>
            ))}
          </div>
          <div className={"flex justify-end"}>
            <Button className={"bg-indigo-500 hover:bg-indigo-600 w-fit px-4"}>
              Add to Basket
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Divider = () => {
  return (
    <div className={"border-solid border-[1px] border-gray-200 w-full my-2"} />
  );
};
