import { $authHost } from "src/shared/api/axiosConfig";
import { Device } from "src/shared/types/device";

export const fetchSingleDevice = async (id: string) => {
  return await $authHost.get<Device | null>("api/device/" + id);
};
