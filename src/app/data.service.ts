import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //public data = new EventEmitter<string>();
  public data = new Subject<string>();

  constructor() { }

  setData(value:string){
    console.log("we are emmiting the data "+value);
    //this.data.emit(value);
    this.data.next(value);
  }

  getData(){
    return this.data.asObservable();
  }



}
