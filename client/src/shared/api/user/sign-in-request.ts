import { $host } from "src/shared/api/axiosConfig";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Role } from "src/shared/types/user";

type SignInResponse = {
  data: {
    token: string;
  };
};
export const signInRequest = async (email: string, password: string) => {
  const { data } = await $host.post<unknown, SignInResponse>("api/user/login", {
    email,
    password,
  });

  localStorage.setItem("token", data.token);

  return jwtDecode<{ id: number; email: string; role: Role } & JwtPayload>(
    data.token,
  );
};
