import { Component,Input,Output,EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

import {QuestionnaireModel,QuestionnaireState} from '../../../shared/model/questionnaire.model';

@Component({
    moduleId: module.id,
    selector: 'questionnaire-controls',
    templateUrl: 'questionnaire-controls.component.html',
    styleUrls:['questionnaire-controls.component.css']
})

export class QuestionnaireControlsComponent {
    @Input() questionnaire:QuestionnaireModel;
    @Output() deleteQuestionnaire = new EventEmitter();
    @Output() publishQuestionnaire = new EventEmitter();
    @Output() endQuestionnaire = new EventEmitter();
    
    constructor(private _router:Router) {

     }

    //预览方法
    onPreview(){
        this._router.navigateByUrl('published/'+this.questionnaire.id+'?type=preview');
    }
    //编辑
    onEdit(){
        this._router.navigateByUrl('admin/edit/'+this.questionnaire.id);
    }
    //发布
    onPublish(){
        this.publishQuestionnaire.emit();
    }
    //结束
    onEnd(){
        this.endQuestionnaire.emit();
    }
    //删除
    onDelete(){
        this.deleteQuestionnaire.emit();
    }

}