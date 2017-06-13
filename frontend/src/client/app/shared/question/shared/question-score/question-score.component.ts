import { Component, EventEmitter,Input,Output } from '@angular/core';
import {QuestionModel} from '../../../model/question.model';
import {QuestionComponent} from '../../index';

@Component({
    moduleId: module.id,
    selector: 'question-score',
    templateUrl: 'question-score.component.html'
})

export class QuestionScoreComponent extends QuestionComponent {
    @Input() question:QuestionModel;
    @Input() editable:boolean;
    @Output() deleteQuestionRequest:EventEmitter<any> = new EventEmitter();
    
}