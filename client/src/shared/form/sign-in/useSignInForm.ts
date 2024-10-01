import { useStore } from "src/store/hooks/useStore";
import { useForm, UseFormInput } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { SignIn } from "src/store/types/user";
import { SHOP_ROUTE } from "src/shared/utils/consts";

const formConfig: UseFormInput<SignIn> = {
  mode: "uncontrolled",
  initialValues: {
    email: "",
    password: "",
  },
  validate: {
    email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  },
};

export const useSignInForm = () => {
  const store = useStore();
  const navigate = useNavigate();
  const form = useForm<SignIn>(formConfig);

  const handleLogin = async (values: SignIn) => {
    store.user.signIn(values).then(() => navigate(SHOP_ROUTE));
  };

  return { form, handleLogin };
};
