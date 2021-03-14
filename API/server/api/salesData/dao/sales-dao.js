
import Sales from '../../../modals/sales'
export default class SalesDao {

  //Get Sales data from analytics collection
  static getAll() {
    return new Promise((resolve, reject) => {
      Sales.find().then((sales) => {
        resolve(sales)
      }, (error) => {
        console.log('Error', error);
        reject(error);
      })
    })
  }
}
