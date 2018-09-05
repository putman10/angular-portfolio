import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})
export class HomeComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;

    constructor(private router: Router, private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
      this.projects = this.projectService.getProjects();
    }

}
