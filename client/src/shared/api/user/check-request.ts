import { $authHost } from "src/shared/api/axiosConfig";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Role } from "src/shared/types/user";

type CheckResponse = {
  data: {
    token: string;
  };
};
export const checkRequest = async () => {
  const { data } = await $authHost.get<unknown, CheckResponse>("api/user/auth");

  return jwtDecode<{ id: number; email: string; role: Role } & JwtPayload>(
    data.token,
  );
};
