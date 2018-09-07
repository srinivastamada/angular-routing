import { IndexRoutes } from './index/index.routes';
import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routes';

export const routes: Routes = [...IndexRoutes, ...HomeRoutes]; 