import React from "react";
import { Link } from "react-router-dom";

import { AuthLayout } from "../layouts/AuthLayout";

export function NotFoundPage() {
  return (
    <AuthLayout>
      <h1>This page is not exist</h1>

      <div>
        You can order a coffee <Link to="/coffee">here</Link>
      </div>
    </AuthLayout>
  );
}
