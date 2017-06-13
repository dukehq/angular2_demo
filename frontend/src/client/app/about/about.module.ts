import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
//import { AboutRoutingModule } from './about-routing.module';
import { AccordionModule } from 'ngx-bootstrap';
@NgModule({
  imports: [CommonModule,AccordionModule.forRoot()],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
