import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./portfolio/home/home.component";
import {AboutComponent} from "./portfolio/about/about.component";
import {ExperienceComponent} from "./portfolio/experience/experience.component";
import {ContactComponent} from "./portfolio/contact/contact.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
