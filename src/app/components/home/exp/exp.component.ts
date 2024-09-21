import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss'],
})
export class ExpComponent {
  experiences = [
    {
      Position: 'Software Engineer Intern',
      Organization: ['Zscaler'],
      Date: 'Feb 2024 - Aug 2024',
      Description:
        'Migrated charting features from Nivo to Recharts and pages from Backbone to React, improving performance and scalability. Optimized frontend by removing redundant network calls, reducing load time by up to 100ms, and developed tests with 90%+ code coverage using Jest and RTL. Addressed critical bugs, enhancing application stability using React, JavaScript, and Backbone.',
    },
    {
      Position: 'Research Intern',
      Organization: ['NIT Delhi'],
      Date: 'June 2023 - July 2023',
      Title: "Integration of Renewable Energy Sources to the Grid:",
      Description:
        'Investigated challenges in connecting Renewable Energy Sources to the grid, Implemented solutions using MATLAB',
    },
  ];
  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  redirect(route: string, event: any) {
    const id = event.target.id;
    if (id == 'demoLink' || id == 'ghLink') {
      return;
    }
    window.open(route, '_blank');
  }
}



// import { Component, Input } from '@angular/core';
// import { Experience } from '@models';
// import { LinkIconComponent } from '@shared/components/link-icon/link-icon.component';

// @Component({
//   selector: 'app-experience-card',
//   standalone: true,
//   imports: [LinkIconComponent],
//   template: `

//   `,
// })
// export class ExperienceCardComponent {
//   @Input({ required: true }) experience!: Experience;
// }
