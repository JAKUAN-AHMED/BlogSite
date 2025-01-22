import express from 'express';
import { AuthRoutes } from '../modules/Auth/auth.routes';
import { BlogRoutes } from '../modules/Blog/blog.routes';
import { AdminRoutes } from '../modules/Admin/admin.routes';
import { UserRoutes } from '../modules/User/user.routes';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/admin',
    route: AdminRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },

];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
