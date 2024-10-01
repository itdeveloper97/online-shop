import { $authHost } from "src/shared/api/axiosConfig";

export const createDevice = async (params: FormData) => {
  const { data } = await $authHost.post("api/device", params);
  return data;
};
