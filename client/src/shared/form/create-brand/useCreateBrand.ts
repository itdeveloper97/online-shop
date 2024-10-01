import { useForm, UseFormInput } from "@mantine/form";
import { Brand } from "src/shared/types/brand";
import { createBrand } from "src/shared/api/brand/create-brand";

const formConfig: UseFormInput<Pick<Brand, "name">> = {
  mode: "uncontrolled",
  initialValues: {
    name: "",
  },
};

export type CreateBrandFormProps = {
  cb?: () => void;
};
export const useCreateBrand = (props: CreateBrandFormProps) => {
  const form = useForm(formConfig);
  const handleSubmit = (data: Pick<Brand, "name">) => {
    createBrand(data);
    props.cb?.();
  };
  return { form, handleSubmit };
};
