import { Modal, ModalProps } from "@mantine/core";
import React from "react";
import { CreateTypeForm } from "src/shared/form/create-type/CreateTypeForm";

type Props = Pick<ModalProps, "opened" | "onClose">;
export const CreateType = (props: Props) => {
  return (
    <Modal {...props} title={"Create Type"} centered>
      <CreateTypeForm cb={props.onClose} />
    </Modal>
  );
};
