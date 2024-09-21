import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  Projects = [
    {
      imgs: ['../../../../assets/images/img1.1.png'],
      Title: 'Chrome Extension: "TimeSync"',
      Description:
        'Designed and coded frontend interfaces to ensure smooth user experiences while bookmarking and retrieving timestamps by leveraging DOM manipulation techniques.',
      Technologies: ['HTML', 'CSS', 'JavaScript', 'Chrome Extension APIs'],
      ghLink: 'https://github.com/Aditya-R7/TimeSync',
    },
    {
      imgs: ['../../../../assets/images/img2.1.jpeg'],
      Title: 'Temperature and Humidity Monitoring System',
      Description:
        'This project continuously tracks and displays live temperature and humidity data, providing real-time updates to users through a web interface. It allows for easy monitoring of environmental conditions with accurate, up-to-date information.',
      Technologies: [
        'React',
        'SheetDB API',
        'MicroController',
        'ESP8266',
        'JavaScript',
      ],
      ghLink: 'https://github.com/Aditya-R7/Real-Time-Temp-Humidity',
      demoLink: '',
    },
    {
      imgs: ['../../../../assets/images/img3.1.jpg'],
      Title: 'Movie Recommendation System',
      Description:
        'Created a user-centric recommendation algorithm that suggests movies based on user preferences and historical ratings.',
      Technologies: [
        'Python',
        'EDA',
        'Numpy',
        'Pandas',
        'matplotlib',
        'seaborn',
      ],
      ghLink: 'https://github.com/Aditya-R7/Movie-Recommendation',
      demoLink: '',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
  };

  @ViewChild('imgContainer') imgContainer!: ElementRef;

  constructor(public analyticsService: AnalyticsService) {}

  ngOnInit(): void {}

  debug() {
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
