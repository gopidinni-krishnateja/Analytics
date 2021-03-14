import areaDao from '../dao/area-dao';


export default class AreaController{
  static getAll(req, res) {
    areaDao.getAll()
      .then(projects => res.status(200).json(projects))
      .catch(error => {
        logger.error(error);
        res.status(400).json(error)
      });
  }
}
