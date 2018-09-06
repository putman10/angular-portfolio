import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [ProjectService]
})
export class PortfolioComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;
  selectedCategory = "View All";
  bounce: any;

    constructor(private router: Router, private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
      this.projects = this.projectService.getProjects();
    }

    filterProjects(clickedCategory: string){
      this.selectedCategory = clickedCategory;
    }

}
