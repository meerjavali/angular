import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    
   
  }
  
  
  title = 'tech';
  apiInformation:ss = {name:'mahesh'};
  somecondinton=true;
  array1 = [1,2,3,4,5];
  constructor(private ds:DataService){}
  
  getApi(){
    this.apiInformation ={name:'mahesh'};
    console.log(this.apiInformation);
    this.somecondinton =false;
  }

  something(came:string){
    console.log("we are in parent ");
    console.log("the message is ", came);
  }
  something1(){
   // console.log(this.ds.getData());
  }
}
interface ss{
  name:string;
}

