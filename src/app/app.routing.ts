import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
     path: '',
     component: HomeComponent
   },
   {
      path: 'portfolio',
      component: PortfolioComponent
    },
    {
      path: 'projects/:id',
      component: ProjectDetailsComponent
    },
    {
      path: 'admin',
      component: AdminComponent
    }
 ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
