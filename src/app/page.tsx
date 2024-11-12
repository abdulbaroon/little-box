import { MainLayout } from "@/components/Layout";
import HomePage from "@/pages/HomePage/HomePage";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};
export default function Page() {
  return (
    <MainLayout>
      <HomePage  />
    </MainLayout>
  );
}
