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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="rentedProperty" element={<RentedProperty />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default router;
