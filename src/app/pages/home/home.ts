import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy{
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm='';
  availableCourses=12;

  onEnrollClick(){
    this.message = 'Enrollment opened!';
  }

  ngOnInit(){
    this.availableCourses=12;
    console.log("HomeComponent initialised - courses loaded");
  }
  
  /*ngOnDestroy is critical for unsubscribing from Observables and clearing timers — forgetting it causes
  memory leaks in long-running SPAs.*/
  ngOnDestroy(){
    console.log("HomeComponent destroyed.")
  }
}

//code comment


