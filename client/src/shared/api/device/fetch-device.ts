import { $authHost } from "src/shared/api/axiosConfig";
import { Device } from "src/shared/types/device";

export type FetchDeviceResponse = { count: number; rows: Device[] };

export type FetchDeviceRequest = {
  typeId: string | null;
  brandId: string | null;
  page: number;
  limit: number;
};
export const fetchDevice = async (params: FetchDeviceRequest) => {
  const { data } = await $authHost.get<FetchDeviceResponse>("api/device", {
    params,
  });
  return data;
};
