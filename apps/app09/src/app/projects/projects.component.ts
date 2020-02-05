import { Component, OnInit } from '@angular/core';

import { ProjectsService, Project } from '@nx09/core-data';

@Component({
  selector: 'nx09-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject: Project;


  constructor(
    private projectsService: ProjectsService,
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projects$ = this.projectsService.getProjects();
console.log('getProjects', this.projects$)
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

 }

