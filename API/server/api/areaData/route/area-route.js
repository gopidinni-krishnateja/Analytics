import areaController from '../controller/area-controller';

export default class ProjectRoutes{
  static init(router) {
    router
      .route('/api/area')
      .get(areaController.getAll)
  }
}
