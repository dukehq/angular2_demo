import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CenterSharedModule} from './shared/center-shared.module';
import { CenterComponent } from './center.component';
//import { CenterRoutingModule } from './center-routing.module';
@NgModule({
    imports: [CommonModule,CenterSharedModule],
    exports: [
        CenterSharedModule,
        CenterComponent
        ],
    declarations: [CenterComponent],
    providers: [],
})
export class CenterModule { }
