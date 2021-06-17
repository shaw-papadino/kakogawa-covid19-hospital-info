import React from "react";
import { Head } from "./head";

export const Layout = ({ children }) => {
  return (
    <div>
      <Head />
      {children}
    </div>
  );
};
