import ProjectRoutes from '../api/analyticsData/route/project-route'
import AreaRoutes from '../api/areaData/route/area-route'
import SalesRoutes from '../api/salesData/route/sales-route'
export default class Routes {
   static init(app, router) {
     ProjectRoutes.init(router);
     AreaRoutes.init(router);
     SalesRoutes.init(router);
     app.use("/", router);
   }
}
