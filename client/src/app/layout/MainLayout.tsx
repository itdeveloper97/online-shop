import { Outlet } from "react-router-dom";
import { NavBar } from "src/widgets/nav-bar/NavBar";
import { useStore } from "src/store/hooks/useStore";
import React, { useEffect, useState } from "react";
import { Center, Loader } from "@mantine/core";

export const MainLayout = () => {
  const {
    user: { check },
  } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    check().finally(() => setIsLoading(false));
  }, [check]);

  if (isLoading) {
    return (
      <Center h={"100vh"}>
        <Loader />
      </Center>
    );
  }

  return (
    <div className={"h-dvh grid grid-rows-[auto_1fr_auto]"}>
      <NavBar />
      <Outlet />
    </div>
  );
};
