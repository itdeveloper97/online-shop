import { $authHost } from "src/shared/api/axiosConfig";
import { Device } from "src/shared/types/device";

export type FetchDeviceResponse = { count: 5; rows: Device[] };
export const fetchDevice = async () => {
  const { data } = await $authHost.get<FetchDeviceResponse>("api/device");
  return data;
};
