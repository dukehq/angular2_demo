import { Route } from '@angular/router';
import { CenterComponent } from './index';
import { AuthGuardService } from '../core/services/index';

export const CenterRoutes:Route[]=[
    {
        path:'center',
        component:CenterComponent,
        canActivate:[AuthGuardService]
    }
];