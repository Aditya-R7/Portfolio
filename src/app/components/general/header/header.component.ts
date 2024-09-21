import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, query, transition, stagger, animate } from '@angular/animations'
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger("animateMenu", [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateY(-50%)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" }))
          ])
        ])
      ])
    ])
  ]
})

export class HeaderComponent implements OnInit {

  responsiveMenuVisible: Boolean = false;
  pageYPosition!: number;
  languageFormControl: FormControl = new FormControl();
  cvName: string = "Resume-Aditya Raj.pdf";

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
  ) { }

  ngOnInit(): void {
  }

  scroll(el: string) {
    const element = document.getElementById(el);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/home']).then(() => {
        const elementAfterNavigation = document.getElementById(el);
        if (elementAfterNavigation) {
          elementAfterNavigation.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
    this.responsiveMenuVisible = false;
  }

  downloadCV() {
    // app url
    let url = window.location.href;
    // Open a new window with the CV
    window.open(url + "/../assets/cv/" + this.cvName, "_blank");
  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition() {
    this.pageYPosition = window.pageYOffset;
  }

  changeLanguage(language: string) {
    this.languageFormControl.setValue(language);
  }
}
