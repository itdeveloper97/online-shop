import React, { useEffect } from "react";
import { TypeBar } from "src/widgets/type-bar/TypeBar";
import { BrandBar } from "src/widgets/brand-bar/BrandBar";
import { DeviceList } from "src/widgets/device-list/DeviceList";
import { useStore } from "src/store/hooks/useStore";
import { DevicePages } from "src/widgets/device-pages/DevicePages";
import { observer } from "mobx-react-lite";

export const ShopPage = observer(() => {
  const { device } = useStore();

  useEffect(() => {
    device.fetchTypes();
    device.fetchBrands();
  }, [device]);

  useEffect(() => {
    device.fetchDevice({
      typeId: device.selectedType?.id || null,
      brandId: device.selectedBrand?.id || null,
      page: device.page,
      limit: device.limit,
    });
  }, [
    device,
    device.selectedType,
    device.selectedBrand,
    device.page,
    device.limit,
  ]);

  return (
    <div
      className={
        "px-4 py-2 mx-auto md:px-6 lg:px-8 lg:w-lg grid grid-cols-4 gap-2"
      }
    >
      <TypeBar />
      <div className={"col-span-3 flex flex-col gap-2"}>
        <BrandBar />
        <DeviceList />
        <DevicePages />
      </div>
    </div>
  );
});
