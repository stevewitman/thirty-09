import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '@nx09/core-data';

@Component({
  selector: 'nx09-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project[];
  @Output() selected = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
