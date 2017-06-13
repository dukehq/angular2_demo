import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/index';


export const routes: Routes = [
    ...HomeRoutes
    //{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
/*      [
         define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       
      
    ]*/
    routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

