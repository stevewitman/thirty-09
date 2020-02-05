import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { RouterModule, Routes } from '@angular/router';

 import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 import { LoginComponent } from '@nx09/ui-login';
 import { ProjectsComponent } from './projects/projects.component';

 const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'login', component: LoginComponent },
   { path: 'projects', component: ProjectsComponent },
   { path: '**', component: PageNotFoundComponent }
 ]

 @NgModule({
   declarations: [],
   imports: [
     CommonModule,
     RouterModule.forRoot(routes)
   ],
   exports: [
     RouterModule
   ]
 })
 export class AppRoutingModule { }
