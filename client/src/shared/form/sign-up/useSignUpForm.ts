import { useStore } from "src/store/hooks/useStore";
import { useForm, UseFormInput } from "@mantine/form";
import { signUpRequest } from "src/shared/api/user/sign-up-request";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "src/shared/utils/consts";

type FormState = {
  email: string;
  password: string;
};

const formConfig: UseFormInput<FormState> = {
  initialValues: {
    email: "",
    password: "",
  },

  validate: {
    email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  },
};

export const useSignUpForm = () => {
  const store = useStore();
  const navigate = useNavigate();
  const form = useForm<FormState>(formConfig);

  const handleSubmit = async (values: FormState) => {
    store.user.signUp(values).then(() => navigate(SHOP_ROUTE));
  };

  return { form, handleSubmit };
};
