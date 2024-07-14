import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule} from'@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    WorkComponent,
    AboutComponent,
    RecipiesComponent,
    TestComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
