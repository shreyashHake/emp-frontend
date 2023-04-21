import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './my-components/auth/login/login.component';
import { RegisterComponent } from './my-components/auth/register/register.component';
import { HomeComponent } from './my-components/home/home.component';
import { PageNotFoundComponent } from './my-components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './my-components/crud/add/add.component';
import { ViewComponent } from './my-components/crud/view/view.component';
import { NavComponent } from './my-components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    AddComponent,
    ViewComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
