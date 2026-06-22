import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Reservation } from "./pages/Reservation";
import { Catering } from "./pages/Catering";
import { AdminRoot } from "./pages/admin/AdminRoot";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminProducts } from "./pages/admin/AdminProducts";
import { AdminProductEdit } from "./pages/admin/AdminProductEdit";
import { AdminReservations } from "./pages/admin/AdminReservations";
import { AdminMedia } from "./pages/admin/AdminMedia";
import { AdminCategories } from "./pages/admin/AdminCategories";
import { AdminEvents } from "./pages/admin/AdminEvents";
import { AdminGallery } from "./pages/admin/AdminGallery";
import { AdminContent } from "./pages/admin/AdminContent";
import { AdminUsers } from "./pages/admin/AdminUsers";
import { AdminAnalytics } from "./pages/admin/AdminAnalytics";
import { AdminNotifications } from "./pages/admin/AdminNotifications";

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
    Component: AdminRoot,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "products", Component: AdminProducts },
      { path: "products/new", Component: AdminProductEdit },
      { path: "products/:id", Component: AdminProductEdit },
      { path: "reservations", Component: AdminReservations },
      { path: "media", Component: AdminMedia },
      { path: "categories", Component: AdminCategories },
      { path: "events", Component: AdminEvents },
      { path: "gallery", Component: AdminGallery },
      { path: "content", Component: AdminContent },
      { path: "users", Component: AdminUsers },
      { path: "analytics", Component: AdminAnalytics },
      { path: "notifications", Component: AdminNotifications },
    ],
  },
]);
