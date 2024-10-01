import React from "react";
import { NavLink } from "react-router-dom";
import { SIGNUP_ROUTE } from "src/shared/utils/consts";
import { useSignInForm } from "src/shared/form/sign-in/useSignInForm";
import { Button, TextInput } from "@mantine/core";

export const SignInForm = () => {
  const { form, handleLogin } = useSignInForm();

  return (
    <form onSubmit={form.onSubmit(handleLogin)} className={"mt-10"}>
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
        Login
      </Button>

      {/* Another Routes */}
      <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
        <NavLink to={SIGNUP_ROUTE} className="flex-2 underline">
          Create an Account
        </NavLink>
      </div>
    </form>
  );
};
