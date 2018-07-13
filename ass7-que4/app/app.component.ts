import { Component } from '@angular/core';



export interface bookInfo {
  bname: string;
  position: number;
  authorname: String;
  no:number;
  
}

const ELEMENT_DATA: bookInfo[] = [
  {position: 1, bname: 'CPP', authorname:"ABC",no:100},
  {position: 2, bname: 'Java', authorname:"PQR",no:100},
  {position: 3, bname: 'Agnipankha', authorname:"A P J Kalam",no:200},
 
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  displayedColumns: string[] = ['position', 'bname', 'authorname','no'];
  dataSource = ELEMENT_DATA;
}