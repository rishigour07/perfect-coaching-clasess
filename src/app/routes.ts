import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Results from "./pages/Results";

// Admin Imports
import AdminLayout from "./pages/admin/AdminLayout";
import Login from "./pages/admin/Login";
import DashboardHome from "./pages/admin/DashboardHome";
import ResultsManager from "./pages/admin/ResultsManager";
import FounderManager from "./pages/admin/FounderManager";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "courses", Component: Courses },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "results", Component: Results },
    ],
  },
  {
    path: "/admin/login",
    Component: Login,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: DashboardHome },
      { path: "results", Component: ResultsManager },
      { path: "founder", Component: FounderManager },
    ],
  },
]);
