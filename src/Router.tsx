import { Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./helpers/router";
import { RegisterPage } from "./pages/Register";
import { LoginPage } from "./pages/Login";
import { NotFoundPage } from "./pages/NotFound";
import { CoffeePage } from "./pages/Coffee";
import { KitchenPage } from "./pages/Kitchen";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/coffee"
        element={
          <PrivateRoute>
            <CoffeePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/kitchen"
        element={
          <PrivateRoute>
            <KitchenPage />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={
          <PrivateRoute>
            <NotFoundPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
