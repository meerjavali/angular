import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {
  constructor(private ds:DataService){

  }
  
  ngOnInit(){
  //   this.ds.data.subscribe(val=>{
  //   console.log(val);
  // })
  this.ds.data.subscribe(val=>{
    console.log(val);
  })
}
  something(){
    // this.ds.data.subscribe(val=>{
    //   console.log(val);
    // })
  
    // console.log(this.ds.getData());
  }
}


