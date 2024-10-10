import RootLayout from "./layouts/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import RentedProperty from "./pages/RentedProperty/RentedProperty";
import Error from "./pages/Error/Error";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// Define the basename for the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="rentedProperty/:id" element={<RentedProperty />} />
      <Route path="*" element={<Error />} />
    </Route>
  ),
  {
    basename: "/Projet-8-Renting-App", // Set the basename to your repository name
  }
);

export default router;
