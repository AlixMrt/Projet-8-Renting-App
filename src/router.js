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
      <Route
        path="rentedProperty/:id"
        element={<RentedProperty />}
        // rajouter l'id ici rentedProperty:id
        // refaire banner about + banner ... pour faire un seul composant
        // attention a l'
        // supprimer ancien accordeon

        // enlever le dossier
        // composant tag possible ?

        // Revoir les location = location.location (partout)
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default router;
