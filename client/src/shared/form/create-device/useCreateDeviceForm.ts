import { useStore } from "src/store/hooks/useStore";
import { useForm, UseFormInput } from "@mantine/form";
import { DeviceInfo } from "src/shared/types/device";
import { randomId } from "@mantine/hooks";
import { createDevice } from "src/shared/api/device/create-device";
import { useState } from "react";

type Info = Omit<DeviceInfo & { key: string }, "id">[];

type FormState = {
  name: string;
  price: number;
  brand: string | null;
  type: string | null;
  file: File | null;
  info: Info;
};
const formConfig: UseFormInput<FormState> = {
  mode: "uncontrolled",
  initialValues: {
    name: "",
    price: 0,
    brand: null,
    type: null,
    file: null,
    info: [],
  },
};
export type CreateDeviceFormProps = {
  cb?: () => void;
};
export const useCreateDeviceForm = (props: CreateDeviceFormProps) => {
  const { device } = useStore();
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const form = useForm(formConfig);

  form.watch("file", ({ value }) => {
    value && setFileUrl(URL.createObjectURL(value));
  });

  const handleAddInfo = () =>
    form.insertListItem("info", {
      title: "",
      description: "",
      number: Date.now(),
      key: randomId(),
    });

  const handleRemoveInfo = (index: number) =>
    form.removeListItem("info", index);

  const handleSubmit = (data: FormState) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price.toString());
    data.type && formData.append("typeId", data.type);
    data.brand && formData.append("brandId", data.brand);
    data.file && formData.append("img", data.file);
    data.file && formData.append("info", JSON.stringify(data.info));

    console.log(data);
    createDevice(formData).then((data) => props.cb?.());
  };

  return {
    form,
    fileUrl,
    device,
    handleAddInfo,
    handleRemoveInfo,
    handleSubmit,
  };
};
