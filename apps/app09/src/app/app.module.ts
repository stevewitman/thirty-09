import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
 import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@nx09/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UiLoginModule } from '@nx09/ui-login';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectComponent } from './projects/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectDetailComponent,
    ProjectComponent
 ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLoginModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
