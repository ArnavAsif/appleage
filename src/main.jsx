import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // make sure it's `react-router-dom`
import Root from "./components/Root.jsx";
import Iphones from "./components/Mobiles/phones/Iphones.jsx";
import Androids from "./components/Mobiles/phones/Androids.jsx";
import Pixels from "./components/Mobiles/phones/Pixels.jsx";
import Others from "./components/Mobiles/phones/Others.jsx";
import ContactUs from "./components/Contact/ContactUs.jsx";

// Lazy-loaded route components
const Homepage = lazy(() => import("./components/HomePage/Homepage.jsx"));
const Pricing = lazy(() => import("./components/Pricing/Pricing.jsx"));
const MobileDetails = lazy(() =>
  import("./components/Mobiles/MobileDetails.jsx")
);
const AllMobileDetails = lazy(() =>
  import("./components/Mobiles/phones/AllMobileDetails.jsx")
);

// Optional fallback
export const Loading = () => (
  <div style={{ textAlign: "center", padding: "2rem" }}>Loading page...</div>
);

// eslint-disable-next-line no-unused-vars
const withSuspense = (Component) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: withSuspense(Homepage),
      },

      {
        path: "mobile/:id",
        element: withSuspense(MobileDetails),
      },
      {
        path: "mobiles/:category/:id",
        element: withSuspense(AllMobileDetails),
      },
      {
        path: "pricing",
        element: withSuspense(Pricing),
      },
      {
        path: "iphones",
        element: <Iphones />,
      },
      {
        path: "android",
        element: <Androids />,
      },
      {
        path: "pixel",
        element: <Pixels />,
      },
      {
        path: "others",
        element: <Others />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
