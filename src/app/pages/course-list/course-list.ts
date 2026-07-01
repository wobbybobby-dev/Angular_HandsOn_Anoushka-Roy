import { Component } from '@angular/core';
import { CourseCard } from "../../components/course-card/course-card";

@Component({
  selector: 'app-course-list',
  imports: [CourseCard ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  selectedCourseId: number | null = null;
  courses=[
    {
      id: 10,
      name : "Java",
      code : "CS1042",
      credits: 3
    },
    {
      id: 11,
      name : "Python",
      code : "CS1044",
      credits: 3
    },
    {
      id: 12,
      name : "Computer Networks",
      code : "CS2378",
      credits: 2
    },
    {
      id: 13,
      name : "Machine Learning",
      code : "CS1665",
      credits: 4
    },
    {
      id: 14,
      name : "Software Engg.",
      code : "CS4566",
      credits: 2
    }
  ]

  onEnroll(courseId: number)
  {
    console.log("Enrolling in course: "+ courseId);
    this.selectedCourseId= courseId;
  }
}
