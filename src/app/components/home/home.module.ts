import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ExpComponent } from './exp/exp.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectComponent,
    ContactComponent,
    CertificateComponent,
    ExpComponent,
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    CarouselModule,
  ],
})
export class HomeModule { }
