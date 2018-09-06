import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const appRoutes: Routes = [
  {
     path: '',
     component: HomeComponent
   },
   {
      path: 'portfolio',
      component: PortfolioComponent
    }
 ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
