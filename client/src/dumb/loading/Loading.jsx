import React from "react";
import load from "./loading.module.css";

export default function Loading() {
  return <span className={load.loader}></span>;
}
