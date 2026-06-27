import React from 'react';
import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
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
import { PlatformRoot } from "./pages/platform/PlatformRoot";
import { PlatformDashboard } from "./pages/platform/PlatformDashboard";
import { BrandsList } from "./pages/platform/BrandsList";
import { BrandDetails } from "./pages/platform/BrandDetails";
import { EmployeesManagement } from "./pages/platform/EmployeesManagement";
import { CustomersManagement } from "./pages/platform/CustomersManagement";
import { ProductsManagement } from "./pages/platform/ProductsManagement";
import { OrdersDashboard } from "./pages/platform/OrdersDashboard";
import { ReportsDashboard } from "./pages/platform/ReportsDashboard";
import { CustomerPortal } from "./pages/customer/CustomerPortal";
import { BranchManagerDashboard } from "./pages/manager/BranchManagerDashboard";
import { EmployeeDashboard } from "./pages/employee/EmployeeDashboard";
import { PanettoRoot } from "./pages/panetto/PanettoRoot";
import { PanettoHome } from "./pages/panetto/PanettoHome";
import { PanettoMenu } from "./pages/panetto/PanettoMenu";
import { PanettoAbout } from "./pages/panetto/PanettoAbout";
import { PanettoContact } from "./pages/panetto/PanettoContact";
import { NotFound } from "./pages/NotFound";

// Landing page that shows both brands
export const router = createBrowserRouter([
  // Main landing page
  {
    path: "/",
    Component: Landing,
  },

  // Basilico (existing restaurant brand)
  {
    path: "/basilico",
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
  
  // Panetto (artisan bakery brand)
  {
    path: "/panetto",
    Component: PanettoRoot,
    children: [
      { index: true, Component: PanettoHome },
      { path: "menu", Component: PanettoMenu },
      { path: "about", Component: PanettoAbout },
      { path: "contact", Component: PanettoContact },
    ],
  },

  // Role-Based Dashboards
  {
    path: "/customer",
    Component: CustomerPortal,
  },
  {
    path: "/manager",
    Component: BranchManagerDashboard,
  },
  {
    path: "/employee",
    Component: EmployeeDashboard,
  },

  // Platform Admin (Multi-brand SaaS)
  {
    path: "/admin",
    Component: PlatformRoot,
    children: [
      { index: true, Component: PlatformDashboard },
      { path: "brands", Component: BrandsList },
      { path: "brands/:brandId", Component: BrandDetails },
      { path: "employees", Component: EmployeesManagement },
      { path: "customers", Component: CustomersManagement },
      { path: "products", Component: ProductsManagement },
      { path: "orders", Component: OrdersDashboard },
      { path: "reservations", Component: AdminReservations },
      { path: "reports", Component: ReportsDashboard },
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

  // Legacy admin routes (kept for backward compatibility)
  {
    path: "/basilico/admin",
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

  // Catch-all 404 route
  {
    path: "*",
    Component: NotFound,
  },

]);
