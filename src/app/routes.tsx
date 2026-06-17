import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Reservation } from "./pages/Reservation";
import { Catering } from "./pages/Catering";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "about", Component: About },
      { path: "gallery", Component: Gallery },
      { path: "reservation", Component: Reservation },
      { path: "catering", Component: Catering },
    ],
  },
]);
