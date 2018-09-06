import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  editProject(selectedProjectKey){
    this.router.navigate(['projects', selectedProjectKey, 'edit'])
  }

  deleteProject(selectedProjectKey) {
    let projectInFirebase = this.projectService.getProjectById(selectedProjectKey);
    projectInFirebase.remove();
    this.router.navigate(['admin']);
  }

  addNewArticle(){
    this.router.navigate(['projects/new']);
  }

}
