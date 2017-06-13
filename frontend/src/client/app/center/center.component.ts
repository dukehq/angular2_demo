import { Component, OnInit,SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {QuestionnaireModel,QuestionnaireState} from '../shared/model/questionnaire.model';
import {QuestionnaireService} from '../core/services/questionnaire.service';

@Component({
    moduleId: module.id,
    selector: 'center',
    templateUrl: 'center.component.html',
    styleUrls:['center.component.css']
})

export class CenterComponent implements OnInit {

    private questionnaires:QuestionnaireModel[]=[];
    private selectedQuestionnaire:QuestionnaireModel;
    private selectedIndex:number;
    private isEmpty:boolean;

    constructor(
        private questionnaireService:QuestionnaireService,
        private router:Router
        ) { }

//获取问卷列表数据方法,可用于初始化和刷新数据
   flushData(){
    this.questionnaireService.getQuestionnaires()
        .subscribe(
            questionnaires =>{
                //判断后端是否返回空对象或者空的questionnaires数组
                if(!questionnaires || questionnaires.length ===0){
                    this.isEmpty=true;
                    return;
                }
                this.isEmpty = false;
                this.questionnaires = questionnaires;
                this.selectedQuestionnaire = this.questionnaires[0];
                this.selectedIndex = 0;
            },
            error=>console.error(error)
        );
   }

   //初始化问卷列表数据
    ngOnInit() { 
        this.flushData();
    }

    onSelect(questionnaire:QuestionnaireModel,index:number){
        this.selectedQuestionnaire =questionnaire;
        this.selectedIndex = index;
    }

    //删除问卷
    onDeleteQuestionnaire(){
        this.questionnaireService.deleteQuestionnaire(this.selectedQuestionnaire.id.toString())
            .subscribe(
                error=>console.log(error)
            );
        this.flushData();
    }
    //发布问卷
    onPublishQuestionnaire(){
        this.questionnaireService.publishQuestionnaire(this.selectedQuestionnaire.id.toString())
            .subscribe(
                questionnaire=>{
                    this.selectedQuestionnaire.state = QuestionnaireState.Published;
                    this.questionnaires[this.selectedIndex] = Object.assign(
                        {},this.selectedQuestionnaire
                    );
                },
                error =>console.log(error)
            );
        this.flushData();
        }
    //结束问卷
    onEndQuestionnaire(){
        this.questionnaireService.endQuestionnaire(this.selectedQuestionnaire.id.toString())
            .subscribe(
                questionnaire=>{
                    this.selectedQuestionnaire.state = QuestionnaireState.Finished;
                    this.questionnaires[this.selectedIndex] = Object.assign(
                        {},this.selectedQuestionnaire
                    );
                },
                error =>console.log(error)
            );
        this.flushData();
    }
}