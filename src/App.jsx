import React from "react";
import './App.css';
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
export default function App() {
  return (
    <RouterProvider router={router} />

  )
}
