import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [ProjectService],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;
  selectedCategory = "View All";
  state = 'hide';

    constructor(private router: Router, private projectService: ProjectService, private route: ActivatedRoute, private location: Location, public el: ElementRef) { }

    ngOnInit() {
      this.projects = this.projectService.getProjects();
    }

    filterProjects(clickedCategory: string){
      this.selectedCategory = clickedCategory;
    }

    viewProject(clickedProjectKey){
    this.router.navigate(['projects', clickedProjectKey])
    }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }


}
