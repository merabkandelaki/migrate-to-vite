import { HOME, FISHES, ADMIN } from "../constants/routes";
import Home from "../pages/Home/Home";
import Fishes from "../pages/Fishes/Fishes";
import Admin from "../pages/Admin/Admin";
import NotFound from "../pages/NotFound/NotFound";

const routes = [
  {
    path: HOME,
    Component: Home,
  },
  {
    path: FISHES,
    Component: Fishes,
  },
  {
    path: ADMIN,
    Component: Admin,
  },
  {
    path: "*",
    Component: NotFound,
  },
];

export default routes;
