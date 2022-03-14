// Globals
import React from "react";

// Components
import MainHead from "./MainHead";

export default function Base({ children }) {

  return (
    <>
      <MainHead />
      <main>{children}</main>
    </>
  );
}
