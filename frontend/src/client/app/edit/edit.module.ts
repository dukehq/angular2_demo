import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {EditSharedModule} from './shared/edit-shared.module';
import {EditComponent} from './edit.component';
import {QuestionnaireModule} from '../shared/questionnaire/questionnaire.module';
import {TabsModule} from 'ngx-bootstrap';
//import {EditRoutingModule} from './edit-routing.module';


@NgModule({
    imports: [
        CommonModule,
        EditSharedModule,
        QuestionnaireModule,
        TabsModule.forRoot()
        ],
    exports: [EditComponent,EditSharedModule,TabsModule],
    declarations: [EditComponent],
})
export class EditModule { }
