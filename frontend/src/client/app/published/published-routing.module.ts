import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { PublishedComponent } from './index';

//发布后的问卷不属于admin的范畴,直接将路由加载到根路由模块
const routes:Routes = [
    {
        path:'published/:id',
        component:PublishedComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PublishedRoutingModule { }
