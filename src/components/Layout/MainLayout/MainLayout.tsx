import React, { ReactNode } from "react";
import Header from "@/components/Header/Header";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

