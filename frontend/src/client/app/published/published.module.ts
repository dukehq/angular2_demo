import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishedComponent } from './index';
import { PublishedRoutingModule } from './index';
import { QuestionnaireModule } from '../shared/questionnaire/questionnaire.module';

@NgModule({
    imports: [CommonModule,PublishedRoutingModule,QuestionnaireModule],
    exports: [PublishedComponent],
    declarations: [PublishedComponent],
})
export class PublishedModule { }

