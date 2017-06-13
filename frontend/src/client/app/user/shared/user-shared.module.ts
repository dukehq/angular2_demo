import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';
import { CoreModule  } from '../../core/core.module';
import { FieldComponent } from './field/index';
import { RegisterComponent } from './register/index';
import { LoginComponent } from './login/index';

@NgModule({
    imports: [CommonModule,ReactiveFormsModule,CoreModule,AlertModule.forRoot()],
    exports: [FieldComponent,RegisterComponent,LoginComponent],
    declarations: [FieldComponent,RegisterComponent,LoginComponent],
})
export class UserSharedModule { }
