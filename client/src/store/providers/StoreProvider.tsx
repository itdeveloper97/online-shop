import { PropsWithChildren } from "react";
import { useStore, StoreContext } from "src/store/hooks/useStore";

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const value = useStore();

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
