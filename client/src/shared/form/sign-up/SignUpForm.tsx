import React from "react";
import { LOGIN_ROUTE } from "src/shared/utils/consts";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useSignUpForm } from "src/shared/form/sign-up/useSignUpForm";
import { Button, TextInput } from "@mantine/core";

export const SignUpForm = observer(() => {
  const { form, handleSubmit } = useSignUpForm();
  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className={"mt-10"}>
      <TextInput
        type={"email"}
        label={"Email"}
        description={"Input Email"}
        placeholder={"Input Email"}
        key={form.key("email")}
        {...form.getInputProps("email")}
      />
      <TextInput
        type={"password"}
        label={"Password"}
        description={"Input Password"}
        placeholder={"Input Password"}
        key={form.key("password")}
        {...form.getInputProps("password")}
      />

      <Button type={"submit"} className={"mt-2 w-full"}>
        Sign Up
      </Button>

      {/* Another Routes */}
      <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
        <NavLink to={LOGIN_ROUTE} className="flex-2 underline">
          Log In
        </NavLink>
      </div>
    </form>
  );
});
