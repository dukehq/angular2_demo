import { NgModule ,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {QuestionSharedModdule} from './shared/question-shared.module';
@NgModule({
    imports: [CommonModule,FormsModule,QuestionSharedModdule],
    exports: [CommonModule,QuestionSharedModdule],
    declarations: [],
    providers: [],
})
export class QuestionModule {
    static forRoot():ModuleWithProviders{
        return{
            ngModule:QuestionModule
        };
    }
 }
