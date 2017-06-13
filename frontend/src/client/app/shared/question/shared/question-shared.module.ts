import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { QuestionCheckboxComponent } from './question-checkbox/index';
import { QuestionRadioComponent } from './question-radio/index';
import { QuestionScoreComponent } from './question-score/index';
import { QuestionTextComponent } from './question-text/index';

@NgModule({
    imports: [CommonModule,FormsModule],
    exports: [
        QuestionCheckboxComponent,
        QuestionRadioComponent,
        QuestionScoreComponent,
        QuestionTextComponent,
        CommonModule,
        FormsModule
    ],
    declarations: [
        QuestionCheckboxComponent,
        QuestionRadioComponent,
        QuestionScoreComponent,
        QuestionTextComponent
    ],
    providers: [],
})
export class QuestionSharedModdule { }
