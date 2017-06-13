import { Component, EventEmitter,Output } from '@angular/core';
import { QuestionType } from '../../../shared/model/question.model';
@Component({
    moduleId: module.id,
    selector: 'question-select',
    templateUrl: 'question-select.component.html',
    styleUrls:['question-select.component.css']
})

export class QuestionSelectComponent {
    @Output()
    //定义事件发射器,当事件发生时,此事件发射器发射事件以及附带的obj给父组件
    addQuestionRequest = new EventEmitter();
    //controls 中包含了问题类型,描述,以及样式class(动态改变a标签的样式)
    private controls:any[];
    constructor(){
        this.controls = [
            {type:QuestionType.Text,label:'文本问题',iconClass:'icon-text'},
            {type:QuestionType.SingleSelect,label:'单选问题',iconClass:'icon-radio'},
            {type:QuestionType.MultiSelect,label:'多选问题',iconClass:'icon-checkbox'},
            {type:QuestionType.Score,label:'分值问题',iconClass:'icon-star'}
        ];
    }
    //当发生click时输出事件
    onAddQuestion(control:any){
        this.addQuestionRequest.emit(control.type);
    }
}