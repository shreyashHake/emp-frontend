import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './my-components/auth/login/login.component';
import { RegisterComponent } from './my-components/auth/register/register.component';
import { HomeComponent } from './my-components/home/home.component';
import { PageNotFoundComponent } from './my-components/page-not-found/page-not-found.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AddComponent } from './my-components/crud/add/add.component';
import { ViewComponent } from './my-components/crud/view/view.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  // {path:"home", component:HomeComponent, canActivate:[AuthGuardService]},
  {path:"home", component:HomeComponent},
  {path:"add", component:AddComponent},
  {path:"view", component:ViewComponent},
  // {path:"add", component:AddComponent, canActivate:[AuthGuardService]},
  // {path:"view", component:ViewComponent, canActivate:[AuthGuardService]},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
