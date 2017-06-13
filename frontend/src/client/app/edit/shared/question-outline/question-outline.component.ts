import { Component, Input } from '@angular/core';
import {QuestionnaireModel} from '../../../shared/model/questionnaire.model';

@Component({
    moduleId: module.id,
    selector: 'questionnaire-outline',
    templateUrl: 'question-outline.component.html',
    styleUrls:['question-outline.component.css']
})

export class QuestionnaireOutlineComponent {

    @Input() questionnaire:QuestionnaireModel;
    constructor() { }

}