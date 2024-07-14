import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { TestBed } from '@angular/core/testing';
import { WorkComponent } from './work/work.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'',redirectTo:'intro',pathMatch:'full'},
  {path:'intro',component:IntroComponent,title:"intro"},
  {path:'about',component:AboutComponent,title:"about"},
  {path:'contact',component:ContactComponent,title:"contact"},
  {path:'recipies',component:RecipiesComponent,title:"recipies"},
  {path:'test',component:TestComponent,title:"test"},
  {path:'work',component:WorkComponent,title:"work"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
