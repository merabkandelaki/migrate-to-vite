import { HOME, FISHES } from "../constants/routes";
import Home from "../pages/Home/Home";
import Fishes from "../pages/Fishes/Fishes";
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
    path: "*",
    Component: NotFound,
  },
];

export default routes;
