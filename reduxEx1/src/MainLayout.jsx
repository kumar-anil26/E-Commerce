import React from "react";
import { Outlet } from "react-router";
import Header from "./common/Header";
import Footer from "./common/Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
