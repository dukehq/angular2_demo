import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './index';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule,AdminRoutingModule,SharedModule],
    exports: [AdminComponent],
    declarations: [AdminComponent],
})
export class AdminModule { }
