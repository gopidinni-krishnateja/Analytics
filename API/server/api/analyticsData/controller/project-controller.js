import projectDao from '../dao/project-dao';


export default class ProjectController{
  static getAll(req, res) {
    console.log('called Controller')
    projectDao.getAll()
      .then(projects => res.status(200).json(projects))
      .catch(error => {
        logger.error(error);
        res.status(400).json(error)
      });
  }
}
