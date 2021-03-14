import salesController from '../controller/sales-controller';

export default class SalesRoute{
  static init(router) {
    router
      .route('/api/sales')
      .get(salesController.getAll)
  }
}
