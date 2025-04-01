import React from "react";
import Image from "next/image";
import loader from "@/assets/loader.gif";

export default function loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={loader} height={150} width={150} alt="Loading..." />
    </div>
  );
}
