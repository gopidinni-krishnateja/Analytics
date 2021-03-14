
import Area from '../../../modals/area'
export default class AreaDao {

  //Get Area data from analytics collection
  static getAll() {
    return new Promise((resolve, reject) => {
      Area.find().then((projects) => {
        resolve(projects)
      }, (error) => {
        console.log('Error', error);
        reject(error);
      })
    })
  }
}
