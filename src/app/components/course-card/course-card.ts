import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges{

  //@Input() course : any;   //tells this variable can receive data from a parent component

  /*changes.course is an object, with properties like previousValue, currentValue, firstChange, etc*/

  ngOnChanges(changes:SimpleChanges){
    console.log("Previous Course: ", changes['course'].previousValue);
    console.log("Current Course: ", changes['course'].currentValue);
  }

  @Input() course!:
  {
    id: number;
    name : string;
    code : string;
    credits: number;

  };

  @Output() enrollRequested = new EventEmitter<number>() 

}
