import React from "react";
import { Head } from "./head";

export const Layout = ({ children }) => {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Head />
      {children}
    </div>
  );
};
