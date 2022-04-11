import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PrayerComponent } from './components/prayer/prayer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TruthComponent } from './components/truth/truth.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home' , component:HomeComponent},
  {path:'prayer', component:PrayerComponent},
  {path:'about', component:AboutUsComponent},
  {path:'truth', component:TruthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
