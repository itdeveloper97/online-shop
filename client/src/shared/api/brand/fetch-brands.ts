import { $authHost } from "src/shared/api/axiosConfig";
import { Brand } from "src/shared/types/brand";

export const fetchBrands = async () => {
  const { data } = await $authHost.get<Brand[]>("api/brand");
  return data;
};
