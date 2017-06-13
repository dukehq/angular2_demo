import { Route } from '@angular/router';
import { EditComponent } from './index';
import { AuthGuardService } from '../core/services/index';

export const EditRoutes:Route[]=[
    {
        path:'edit/:id',
        component:EditComponent,
        //canActivate:[AuthGuardService]
    }
];