import { $authHost } from "src/shared/api/axiosConfig";
import { Brand } from "src/shared/types/brand";

export const createBrand = async (params: Pick<Brand, "name">) => {
  const { data } = await $authHost.post("api/brand", params);
  return data;
};
