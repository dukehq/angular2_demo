import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {QuestionModule} from '../question/question.module';
import { QuestionSharedModdule } from '../question/shared/question-shared.module';
import {QuestionnaireComponent} from './questionnaire.component';
import {AlertModule} from 'ngx-bootstrap';


@NgModule({
    imports: [CommonModule,FormsModule,QuestionModule,AlertModule.forRoot(),QuestionSharedModdule],
    exports: [QuestionnaireComponent,CommonModule,FormsModule,QuestionModule,QuestionSharedModdule],
    declarations: [QuestionnaireComponent],
    providers: [],
})
export class QuestionnaireModule { }
