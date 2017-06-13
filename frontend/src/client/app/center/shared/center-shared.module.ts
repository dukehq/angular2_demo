import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { QuestionnaireDetailComponent } from './questionnaire-detail/index';
import { QuestionnaireItemComponent } from './questionnaire-item/index';
import { QuestionnaireControlsComponent } from './questionnaire-controls/index';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule,RouterModule],
    exports: [
        QuestionnaireDetailComponent,
        QuestionnaireItemComponent,
        QuestionnaireControlsComponent
    ],
    declarations: [
        QuestionnaireDetailComponent,
        QuestionnaireItemComponent,
        QuestionnaireControlsComponent
        ],
    providers: [],
})
export class CenterSharedModule {

 }
