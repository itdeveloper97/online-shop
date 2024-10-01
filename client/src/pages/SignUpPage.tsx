import React from "react";
import { Card } from "src/shared/ui/card/Card";
import { SignUpForm } from "src/shared/form/sign-up/SignUpForm";

export const SignUpPage = () => {
  return (
    <div className={"flex justify-center items-center"}>
      <Card title={"Sign Up"} className={"w-5/12"}>
        <SignUpForm />
      </Card>
    </div>
  );
};
