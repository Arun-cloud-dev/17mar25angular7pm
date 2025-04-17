import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        component:AdminComponent,
    },
    {
        path: 'aboutus',
        component:AboutusComponent,
    }
];
