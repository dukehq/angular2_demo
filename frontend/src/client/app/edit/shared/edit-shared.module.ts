import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuestionSelectComponent} from './question-select/index';
import {QuestionnaireOutlineComponent} from './question-outline/index';

@NgModule({
    imports: [CommonModule],
    exports: [CommonModule,QuestionSelectComponent,QuestionnaireOutlineComponent],
    declarations: [QuestionSelectComponent,QuestionnaireOutlineComponent],
})
export class EditSharedModule { }
