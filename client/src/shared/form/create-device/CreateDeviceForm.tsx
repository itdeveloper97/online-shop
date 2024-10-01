import React, { useEffect, useState } from "react";
import {
  Button,
  Fieldset,
  FileButton,
  Image,
  NumberInput,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import {
  CreateDeviceFormProps,
  useCreateDeviceForm,
} from "src/shared/form/create-device/useCreateDeviceForm";

export const CreateDeviceForm = (props: CreateDeviceFormProps) => {
  const {
    form,
    fileUrl,
    device,
    handleAddInfo,
    handleRemoveInfo,
    handleSubmit,
  } = useCreateDeviceForm(props);

  const listInfo = form.getValues().info.map((item, index) => (
    <Fieldset
      legend={" Property: " + index + " "}
      className={"mt-2"}
      key={item.key}
    >
      <TextInput
        key={form.key(`info.${index}.title`)}
        {...form.getInputProps(`info.${index}.title`)}
        label={"Property Name"}
        description="Input Name of Property"
        placeholder="Input Name of Property"
      />
      <TextInput
        key={form.key(`info.${index}.description`)}
        {...form.getInputProps(`info.${index}.description`)}
        label={"Property Description"}
        description="Input Description of Property"
        placeholder="Input Description of Property"
      />
      <Button
        color={"red"}
        className={"w-full mt-2"}
        onClick={() => handleRemoveInfo(index)}
      >
        Remove
      </Button>
    </Fieldset>
  ));

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        key={form.key("name")}
        {...form.getInputProps("name")}
        label="Name"
        description="Input the Name of Device"
        placeholder="Input the Name of Device"
      />
      <NumberInput
        key={form.key("price")}
        {...form.getInputProps("price")}
        label="Price"
        description="Specify the price in USD"
        placeholder="Specify the price in USD"
        min={1}
      />
      <Select
        key={form.key("type")}
        {...form.getInputProps("type")}
        label="Select Type"
        description="Pick the value"
        placeholder="Pick the value"
        data={device.types.map((type) => ({
          label: type.name,
          value: type.id.toString(),
        }))}
      />
      <Select
        key={form.key("brand")}
        {...form.getInputProps("brand")}
        label="Select Brand"
        placeholder="Pick value"
        data={device.brands.map((brand) => ({
          label: brand.name,
          value: brand.id.toString(),
        }))}
      />
      <div className={"mt-2"}>
        {!fileUrl ? (
          <FileButton
            key={form.key("file")}
            {...form.getInputProps("file")}
            accept="image/png,image/jpeg"
          >
            {(props) => <Button {...props}>Upload image</Button>}
          </FileButton>
        ) : (
          <div className={"mt-2"}>
            <Image radius="md" src={fileUrl} />
            <Text size="sm" ta="center" mt="sm">
              Picked file: {form.values.file?.name}
            </Text>
          </div>
        )}
      </div>
      <div className={"mt-2"}>
        <Button onClick={handleAddInfo} className={"w-full"}>
          + Add Property
        </Button>
        {listInfo}
      </div>
      <Button className={"w-full mt-2"} type={"submit"}>
        Create
      </Button>
    </form>
  );
};
