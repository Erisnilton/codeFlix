import { Routes, Route } from "react-router-dom";
import routes from "./index";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Routes>
      {routes.map((route, key) => {
        return (
          <Route
            key={key}
            path={route.path as string}
            element={route.element}
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;