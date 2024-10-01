import { $authHost } from "src/shared/api/axiosConfig";
import { Type } from "src/shared/types/type";

export const fetchTypes = async () => {
  const { data } = await $authHost.get<Type[]>("api/type");
  return data;
};
