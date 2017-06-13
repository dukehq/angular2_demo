import { Routes } from '@angular/router';
import { RegisterComponent,LoginComponent } from './shared/index';


export const UserRoutes:Routes=[
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
];