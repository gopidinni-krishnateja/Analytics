import salesDao from '../dao/sales-dao';


export default class SalesController{
  static getAll(req, res) {
    salesDao.getAll()
      .then(sales => res.status(200).json(sales))
      .catch(error => {
        logger.error(error);
        res.status(400).json(error)
      });
  }
}
