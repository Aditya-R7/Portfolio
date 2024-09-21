import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'B.Tech',
      Orgenization: 'National Institute of Technolohy Delhi',
      Specialization: 'Electrical and Electronics Engineering',
      Date: '2020 — 2024',
      Description: [
        'Focused on Electrical Engineering with coursework in circuits, power systems, and electronics. However, self-learned computer science concepts including full-stack development, programming languages, and system design, which fueled my interest in software engineering.'
      ]
    },
    {
      Tab: '12th',
      Orgenization: 'Jesus & Mary Academy',
      Specialization: 'CBSE',
      Date: '2020',
      Description: [
        'Studied core subjects including Mathematics, Physics, and Chemistry. Developed problem-solving skills and analytical thinking, paving the way for engineering studies.'
      ]
    },
    {
      Tab: '10th',
      Orgenization: 'Jesus & Mary Academy',
      Specialization: 'CBSE',
      Date: '2018',
      Description: [
        'Built a strong foundation in science and mathematics with excellent academic performance, setting the stage for future technical pursuits.'
      ]
    }
  ];

  active = 0

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }
}
