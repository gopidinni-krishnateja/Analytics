import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WebRequestService{
  constructor(private http: HttpClient){}

  //Returns chords information
  async getAllData(){
    const promise = await  new Promise((resolve,reject)=>{
      this.http.get(environment.API_ROOT + 'projects').toPromise().then(((resp)=>{
        resolve(resp);
      })).catch((err)=>{
        reject(err);
      })
  });
    return promise
  }
  //Returns Area chart information
  async getAreaData(){
    const promise = await  new Promise((resolve,reject)=>{
      this.http.get(environment.API_ROOT + 'area').toPromise().then(((resp)=>{
        resolve(resp);
      })).catch((err)=>{
        reject(err);
      })
    });
    return promise
  }

  //Returns Sales chart information
  async getSalesData(){
    const promise = await  new Promise((resolve,reject)=>{
      this.http.get(environment.API_ROOT + 'sales').toPromise().then(((resp)=>{
        resolve(resp);
      })).catch((err)=>{
        reject(err);
      })
    });
    return promise
  }
}
