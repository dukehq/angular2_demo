import { Component,Input } from '@angular/core';
import {QuestionnaireModel,QuestionnaireState} from '../../../shared/model/questionnaire.model';

@Component({
    moduleId: module.id,
    selector: 'questionnaire-detail',
    templateUrl: 'questionnaire-detail.component.html'
})

export class QuestionnaireDetailComponent {

    @Input() questionnaire:QuestionnaireModel;
    constructor() { }
}