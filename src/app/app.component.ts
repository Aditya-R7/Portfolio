import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Aditya Raj | Software Engineer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Web, software, developer' },
      { name: 'description', content: 'As a software engineer with expertise in Frontend, I have a comprehensive understanding of Frontend web development. My strong foundation in JavaScript allows me to effectively work with front-end technologies such as Angular.' },
    ]);

    AOS.init();
  }
}
