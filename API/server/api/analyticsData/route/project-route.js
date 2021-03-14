import projectController from '../controller/project-controller';

export default class ProjectRoutes{
  static init(router) {
    router
      .route('/api/projects')
      .get(projectController.getAll)
  }
}
