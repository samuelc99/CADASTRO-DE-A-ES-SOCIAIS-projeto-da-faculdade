import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes.jsx"; // import correto

export function RoutesWrapper() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
