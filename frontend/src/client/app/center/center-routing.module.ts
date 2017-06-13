import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CenterComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'center', component: CenterComponent }
    ])
  ],
  exports: [RouterModule]
})
export class CenterRoutingModule { }