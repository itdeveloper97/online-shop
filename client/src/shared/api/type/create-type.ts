import { $authHost } from "src/shared/api/axiosConfig";
import { Type } from "src/shared/types/type";

export const createType = async (type: Pick<Type, "name">) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};
