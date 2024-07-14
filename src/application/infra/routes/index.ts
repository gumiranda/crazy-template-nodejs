import { health } from "./health";
import { auth } from "./auth";
import { account } from "./account";
import { category } from "./category";
// IMPORT MODULE FILES
import { photo } from "./photo";
import { user } from "./user";
import { uploadRoutes } from "./photo/uploadPhotoRouter";

const routes = [
  health,
  auth,
  account,
  category,
  // ADD FUNCTION IMPORTS
  photo,
  user,
  uploadRoutes,
];

export { routes };
