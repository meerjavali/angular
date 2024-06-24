import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  meer ="hello meerja";

 ngOnInit(){
  // this.http.get('https://ng-gym-95d0c-default-rtdb.firebaseio.com/users.json').subscribe(result=>{
  //   console.log(result);
  // })

 }
  @Input() apiinformationCameFromApp= {name:'kohli'}; //parent to child
// @Output() meerja = new EventEmitter<string>(); //child to parent

  dosomething(){
  console.log("data has been set to "+this.meer);

   this.ds.setData(this.meer);
   //this.meerja.next();
      
  }
  constructor(private ds:DataService, private http:HttpClient){


  }
  so(value){
    console.log(value);
  }
}
