import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./portfolio/home/home.component";
import {ExperienceComponent} from "./portfolio/experience/experience.component";
import {ContactComponent} from "./portfolio/contact/contact.component";
import {AboutComponent} from "./portfolio/about/about.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
