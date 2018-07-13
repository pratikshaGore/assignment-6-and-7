import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm:FormGroup;
  name:string='';
  password:string='';
   post:any;
   constructor(private fb : FormBuilder)
   {
     this.myForm = fb.group(
         {
          'name':[null,Validators.required],
          'password':[null,Validators.required]
         }
     )
   }
 
 dis(post)
 {
   this.name=post.name;
   this.password=post.password;
   console.log(post.name+" "+post.password)
 }
}
