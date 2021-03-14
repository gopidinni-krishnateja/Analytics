import Promise from 'bluebird';

import Project from '../../../modals/project'
export default class ProjectDAO {

  //Get project data from analytics collection
  static getAll() {
    return new Promise((resolve, reject) => {
    Project.find().then((projects) => {
        resolve(projects)
      }, (error) => {
        console.log('Error', error);
        reject(error);
      })
    })
  }
}
