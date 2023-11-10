import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  @Input () id:String ='';
  @Input () lastName:String ='';
  @Input () firstName:String ='';
  @Input () gender:String ='';
  @Input () age:String ='';
  @Input () birthDate:String ='';
  @Input () dateEmployed:String ='';
  @Input () attendance:String ='';

  constructor(){}
  ngOnInit(): void {
      
  }
}
