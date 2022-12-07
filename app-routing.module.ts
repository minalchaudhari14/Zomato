import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',loadChildren:()=>import('./home/home.module').then(el=>el.HomeModule)},
  {path:'invester-relation',loadChildren:()=>import('./invester-relation/invester-relation.module').then(el=>el.InvesterRelationModule)},
  {path:'log-in',loadChildren:()=>import('./log-in/log-in.module').then(el=>el.LogInModule)},
  {path:'sign-up',loadChildren:()=>import('./sign-up/sign-up.module').then(el=>el.SignUpModule)},
  {path:'add-restrotant',loadChildren:()=>import('./add-restrorant/add-restrorant.module').then(el=>el.AddRestrorantModule)},
  {path:'',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
