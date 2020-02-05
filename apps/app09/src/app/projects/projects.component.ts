import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProjectsService, Project } from '@nx09/core-data';

@Component({
  selector: 'nx09-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject: Project;
  form: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.getProjects();
    this.initForm();
  }

  getProjects() {
    this.projects$ = this.projectsService.getProjects();
console.log('getProjects', this.projects$)
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    this.form.patchValue(project);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])]
    })
  }

  saveProject(project: Project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectsService.createProject(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  updateProject(project) {
    this.projectsService.updateProject(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      importanceLevel: 0
    }
    this.selectProject(emptyProject);
  }

  cancel () {
    this.resetProject();
  }

}

