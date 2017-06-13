import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { QuestionnaireModel,QuestionnaireState } from '../model/questionnaire.model';
import { QuestionModel } from '../model/question.model'; 
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'questionnaire',
    templateUrl: 'questionnaire.component.html',
    styleUrls:['questionnaire.component.css']
})

export class QuestionnaireComponent implements OnInit {
    @Input() questionnaire:QuestionnaireModel;
    @Output() submitQuestionnaire = new EventEmitter();
    public alert:any={
        type:'failure',
        msg:'success'
    };
    private editable:boolean;
    private isPreview:boolean;

    constructor(
        private activatedRoute:ActivatedRoute,
        private router:Router
        ){}
    ngOnInit() { 
        this.editable = this.questionnaire && this.questionnaire.state===QuestionnaireState.Created;
        //判断当前URL是否为预览页面
        this.activatedRoute.queryParams.subscribe(
            params=>this.isPreview = params['type'] ==='preview'
        );
    }

    onDeleteQuestion(index:number){
        this.questionnaire.questionList.splice(index,1);
    }

    onSubmit(){
        if(this.isPreview){
            this.router.navigateByUrl('/admin/center');
            return;
        }
        switch(this.questionnaire.state){
            case QuestionnaireState.Created:
                this.submitQuestionnaire.emit(this.questionnaire);
                break;
            case QuestionnaireState.Published:
                this.alert={
                    type:'success',
                    msg:'提交成功,感谢您的耐心回答.'
                };
                break;
            default:
                break;
        }
    }
}