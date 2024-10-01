import { Button, TextInput } from "@mantine/core";
import {
  CreateTypeFormProps,
  useCreateTypeForm,
} from "src/shared/form/create-type/useCreateTypeForm";

export const CreateTypeForm = (props: CreateTypeFormProps) => {
  const { form, handleSubmit } = useCreateTypeForm(props);

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        {...form.getInputProps("name")}
        key={form.key("name")}
        description={"Input the Name of Type"}
        placeholder={"Input the Name of Type"}
      />
      <Button className={"w-full mt-2"} type={"submit"}>
        Create
      </Button>
    </form>
  );
};
