import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollDirective } from '../directives/scroll.directive';
import { SectionOneComponent } from './section-one/section-one.component';


@NgModule({
  declarations: [
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    ScrollDirective,
    SectionOneComponent

  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    ScrollDirective,
    SectionOneComponent

  ]
})
export class HomeModule { }
