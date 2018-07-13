import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  MyGroup:FormGroup;
  post:any;
 
  cars=["red","black","purple","while","brown"];
  cname:String="";
  ctype:string="";
  cnumber:string="";
  ccolor:string="";
  cnoseats:string="";
  constructor(private fb:FormBuilder)
  {
this.MyGroup=fb.group({
  'cname':[null],
  'ctype':[null],
  'ccolor':[null],
  'cnumber':[null,Validators.required],
  'cnoseats':[null]


})
  }
  display(post)
  {
this.cname=post.cname;
this.ctype=post.ctype;
this.ccolor=post.ccolor;
this.cnoseats=post.cnoseats;
this.cnumber=post.cnumber;

  }
}
