import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course/course.service';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  courseId: any;
  course: any;
  videoUrl = "http://localhost:8000/media/videos/light__blackness_logo_reveal.mp4";
  api?: VgApiService; // Declare as possibly undefined

  constructor(private route: ActivatedRoute, private service: CourseService, private vgApi: VgApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id');
    });

    this.service.getCourseById(this.courseId)
      .subscribe({
        next: (result) => {
          this.course = result;
        }
      });
  }

  onPlayerReady(api: VgApiService) {
    this.api = api;
  }



}
