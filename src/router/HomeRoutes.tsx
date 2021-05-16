import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    childre: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    childre: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    childre: <Setting />
  },
  {
    path: "*",
    exact: false,
    childre: <Page404 />
  }
];
