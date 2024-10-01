import { Modal, ModalProps } from "@mantine/core";
import React from "react";
import { CreateBrandForm } from "src/shared/form/create-brand/CreateBrandForm";

type Props = Pick<ModalProps, "opened" | "onClose">;
export const CreateBrand = (props: Props) => {
  return (
    <Modal {...props} title={"Create Brand"} centered>
      <CreateBrandForm cb={props.onClose} />
    </Modal>
  );
};
