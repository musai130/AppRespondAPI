import { Routes } from '@angular/router';
import {UsersPageComponent} from "./pages/users/users-page.component";
import {ResourcesPageComponent} from "./pages/resources/resources-page.component";


export const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent
  },
  {
    path: 'resources',
    component: ResourcesPageComponent
  }
];
