import { Button, TextInput } from "@mantine/core";
import {
  CreateBrandFormProps,
  useCreateBrand,
} from "src/shared/form/create-brand/useCreateBrand";

export const CreateBrandForm = (props: CreateBrandFormProps) => {
  const { form, handleSubmit } = useCreateBrand(props);
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        {...form.getInputProps("name")}
        key={form.key("name")}
        description={"Input the Name of Brand"}
        placeholder={"Input the Name of Brand"}
      />
      <Button className={"w-full mt-2"} type={"submit"}>
        Create
      </Button>
    </form>
  );
};
