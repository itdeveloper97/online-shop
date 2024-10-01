export type Device = {
  id: string;
  name: string;
  price: number;
  rating: number;
  img: string;
  info: DeviceInfo[];
};

export type DeviceInfo = {
  id: string;
  title: string;
  description: string;
  number: Date | number;
};
