import { Component,OnInit,Injectable,Inject} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { FieldBase } from '../field'
import { RegisterService } from '../../../core/services/register.service';
import { UserService } from '../../../core/services/user.service';

@Component({
    moduleId:module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls:['register.component.css'],
})

export class RegisterComponent implements OnInit {
    form:FormGroup;
    registered = false;
    fields:FieldBase<any>[] = [];
    alert:any = {msg:'注册成功',type:'success',closable:true};

    constructor(
        private registerService:RegisterService,
        private userService:UserService,
        private route:Router
        ) {
            this.fields = registerService.getFields();
         }

    ngOnInit(){
        this.form = this.registerService.toFormGroup(this.fields);
    }
    
    showPassword(){
        this.fields.forEach((field:any)=>{
            if(field.key ==='password'){
                field.type = field.type==='password'?'text':'password';
            }
        });
    }

    resetForm(){
        this.form.reset();
    }

    register(){
        this.registerService.addUser(this.form.value)
            .subscribe(res=>{
                let body = res.json();
                //注册成功
                if(body && body.succes){
                    this.alert.msg = body.message||"注册成功";
                    this.alert.type = body.success?"success":"danger";
                    this.registered = true;
                    this.userService.isLogin = true;
                    //缓存用户信息
                    this.userService.userInfo = {username:this.form.value.username,createDate:new Date().toLocaleDateString()}
                    //跳转到首页
                    this.route.navigate(['']);
                }else{
                    this.registered = false;
                    console.log(body.message);
                }
            },
            (error:any)=>
                console.log(error)
            );
    }
}