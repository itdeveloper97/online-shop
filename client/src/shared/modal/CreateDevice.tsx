import { Modal, ModalProps } from "@mantine/core";
import React from "react";
import { CreateDeviceForm } from "src/shared/form/create-device/CreateDeviceForm";

type Props = Pick<ModalProps, "opened" | "onClose">;

export const CreateDevice = (props: Props) => {
  return (
    <Modal {...props} title={"Create Device"} centered>
      <CreateDeviceForm cb={props.onClose} />
    </Modal>
  );
};
