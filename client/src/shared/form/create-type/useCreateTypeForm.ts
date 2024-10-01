import { useForm, UseFormInput } from "@mantine/form";
import { Type } from "src/shared/types/type";
import { createType } from "src/shared/api/type/create-type";

const formConfig: UseFormInput<Pick<Type, "name">> = {
  mode: "uncontrolled",
  initialValues: {
    name: "",
  },
};
export type CreateTypeFormProps = {
  cb?: () => void;
};
export const useCreateTypeForm = (props: CreateTypeFormProps) => {
  const form = useForm(formConfig);
  const handleSubmit = (data: Pick<Type, "name">) => {
    createType(data).then(({ data }) => {
      props.cb?.();
    });
  };
  return { form, handleSubmit };
};
