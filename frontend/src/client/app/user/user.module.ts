import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserSharedModule } from './shared/user-shared.module';
//import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [CommonModule,UserSharedModule],
    exports: [CommonModule,UserSharedModule],
})
export class UserModule { }
