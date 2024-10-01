import { SignInForm } from "src/shared/form/sign-in/SignInForm";
import { Card } from "src/shared/ui/card/Card";

export const SignInPage = () => {
  return (
    <div className={"flex justify-center items-center"}>
      <Card title={"Login"} className={"w-5/12"}>
        <SignInForm />
      </Card>
    </div>
  );
};
