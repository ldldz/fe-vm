import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import Wallet from "./routes/Wallet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/wallet" element={<Wallet />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
