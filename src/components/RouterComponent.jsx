import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Loader";

// const Home = lazy(() => import("../pages/Home"));
// const Engine = lazy(() => import("../pages/Engine.jsx"));
// const CarDetails = lazy(() => import("../pages/CarDetails.jsx"));
// const Interior = lazy(() => import("../pages/Interior.jsx"));
// const Summary = lazy(() => import("../pages/Summary.jsx"));

const Home = lazy(() => {
  return Promise.all([
    import("../pages/Home"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Engine = lazy(() => {
  return Promise.all([
    import("../pages/Engine"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});
const CarDetails = lazy(() => {
  return Promise.all([
    import("../pages/CarDetails"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Interior = lazy(() => {
  return Promise.all([
    import("../pages/Interior"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Summary = lazy(() => {
  return Promise.all([
    import("../pages/Summary"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});

export const routesUrl = {
  home: "/",
  engine: "engine",
  carDetails: "car-details",
  interior: "interior",
  summary: "summary",
};

const RouterComponent = () => {
  return (
    <Routes>
      <Route
        path={routesUrl.home}
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={routesUrl.engine}
        element={
          <Suspense fallback={<Loader />}>
            <Engine />
          </Suspense>
        }
      />
      <Route
        path={routesUrl.carDetails}
        element={
          <Suspense fallback={<Loader />}>
            <CarDetails />
          </Suspense>
        }
      />
      <Route
        path={routesUrl.interior}
        element={
          <Suspense fallback={<Loader />}>
            <Interior />
          </Suspense>
        }
      />
      <Route
        path={routesUrl.summary}
        element={
          <Suspense fallback={<Loader />}>
            <Summary />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RouterComponent;
