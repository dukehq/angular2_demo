import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'edit/:id', component: EditComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EditRoutingModule { }
