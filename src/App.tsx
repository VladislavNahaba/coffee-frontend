import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Router } from "./Router";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover={false}
      />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
