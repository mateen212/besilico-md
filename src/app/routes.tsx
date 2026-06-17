import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Reservation } from "./pages/Reservation";
import { Catering } from "./pages/Catering";
import { AdminLayout } from "./layouts/AdminLayout";
import { AdminDashboard } from "./pages/admin/Dashboard";
import { AdminProducts } from "./pages/admin/Products";
import { AdminMediaLibrary } from "./pages/admin/MediaLibrary";
import { AdminReservations } from "./pages/admin/Reservations";
import { AdminEvents } from "./pages/admin/Events";
import { AdminUsers } from "./pages/admin/Users";
import { AdminAnalytics } from "./pages/admin/Analytics";
import { AdminSettings } from "./pages/admin/Settings";

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
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "products", Component: AdminProducts },
      { path: "media", Component: AdminMediaLibrary },
      { path: "reservations", Component: AdminReservations },
      { path: "events", Component: AdminEvents },
      { path: "users", Component: AdminUsers },
      { path: "analytics", Component: AdminAnalytics },
      { path: "settings", Component: AdminSettings },
    ],
  },
]);
