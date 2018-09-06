import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  projectId: string = null;
  project;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.project = this.projectService.getProjectById(this.projectId);
  }

  saveProject(name: string, description: string, screenshots: string[], githubLink: string, projectLink: string, category: string) {
    this.project.update({
      name: name,
      description: description,
      screenshots: screenshots,
      githubLink: githubLink,
      projectLink: projectLink,
      category: category
    });
    this.router.navigate(['admin']);
  }

  deleteProject() {
    this.project.remove();
    this.router.navigate(['admin']);
  }

}
