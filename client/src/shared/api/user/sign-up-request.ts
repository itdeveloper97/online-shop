import { $host } from "src/shared/api/axiosConfig";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Role } from "src/shared/types/user";

type SignUpResponse = {
  token: string;
};
export const signUpRequest = async (email: string, password: string) => {
  const { data } = await $host.post<SignUpResponse>("api/user/registration", {
    email,
    password,
    role: "ADMIN",
  });

  localStorage.setItem("token", data.token);

  return jwtDecode<{ id: number; email: string; role: Role } & JwtPayload>(
    data.token,
  );
};
