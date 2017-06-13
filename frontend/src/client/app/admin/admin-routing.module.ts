import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AdminComponent } from './index';
import { HomeRoutes } from '../home/index';
import { AboutRoutes } from '../about/index';
import { CenterRoutes } from '../center/index';
import { EditRoutes } from '../edit/index';
import { UserRoutes } from '../user/index';

//admin子路由管理
const routes:Routes = [
    {
        path:'admin',
        component:AdminComponent,
        children:[
            //帮助子路由
            ...AboutRoutes,
            //我的问卷子路由
            ...CenterRoutes,
            //问卷编辑子路由
            ...EditRoutes,
            //用户管理子路由
            ...UserRoutes
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
