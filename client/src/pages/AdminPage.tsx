import { Button } from "@mantine/core";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { CreateType } from "src/shared/modal/CreateType";
import { CreateBrand } from "src/shared/modal/CreateBrand";
import { CreateDevice } from "src/shared/modal/CreateDevice";

export const AdminPage = () => {
  const [
    openedCreateType,
    { open: openCreateTypeModal, close: closeCreateTypeModal },
  ] = useDisclosure(false);
  const [
    openedCreateBrand,
    { open: openCreateBrandModal, close: closeCreateBrandModal },
  ] = useDisclosure(false);
  const [
    openedCreateDevice,
    { open: openCreateDeviceModal, close: closeCreateDeviceModal },
  ] = useDisclosure(false);

  return (
    <div className={"px-4 py-2 mx-auto md:px-6 lg:px-8 lg:w-lg"}>
      <div className={"flex justify-center gap-2"}>
        <Button onClick={openCreateTypeModal}>Add Type</Button>
        <Button onClick={openCreateBrandModal}>Add Brand</Button>
        <Button onClick={openCreateDeviceModal}>Add Device</Button>
      </div>

      <CreateType opened={openedCreateType} onClose={closeCreateTypeModal} />
      <CreateBrand opened={openedCreateBrand} onClose={closeCreateBrandModal} />
      <CreateDevice
        opened={openedCreateDevice}
        onClose={closeCreateDeviceModal}
      />
    </div>
  );
};
