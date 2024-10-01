import { createContext, useContext } from "react";
import DeviceStore from "src/store/DeviceStore";
import { UserStore } from "src/store/UserStore";

export const StoreContext = createContext({
  device: new DeviceStore(),
  user: new UserStore(),
});
export const useStore = () => {
  return useContext(StoreContext);
};
