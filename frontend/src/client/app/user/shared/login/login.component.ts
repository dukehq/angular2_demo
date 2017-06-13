import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

import { FieldBase } from '../field/index';
import { LoginService,UserService } from '../../../core/services/index';

@Component({
    moduleId:module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.css']
})

export class LoginComponent implements OnInit {
    form:FormGroup;
    fields:FieldBase<any>[] = [];
    //先前的路径,登录完毕后返回到原路径
    returnUrl:string ='';

    constructor(
        private ls:LoginService,
        private activeRoute:ActivatedRoute,
        private route:Router,
        private userService:UserService
    ) { 
        this.fields = ls.getFields();
        //获取原路径
        this.activeRoute.queryParams
            .subscribe(
                params =>this.returnUrl=params['returnUrl']
            );
    }

    ngOnInit(){
        this.form=this.ls.toFormGroup(this.fields);
    }

    login() {
        console.log(this.fields);
        //console.log(this.returnUrl);
        //console.log('aaaaa');
        console.log(this.form.value);
        //this.userService.isLogin = true;
        //this.route.navigateByUrl(this.returnUrl?this.returnUrl:'/');
        this.ls.login(this.form.value)
            .subscribe(
                res=>{
                    let body = res.json();
                    //console.log(body);
                    //登录校验成功
                    if(body && body.success){
                        console.log('bbb');
                        this.userService.isLogin = true;
                        this.userService.userInfo = {
                            username:this.form.value.username,
                            createDate:new Date().toLocaleDateString()
                        }
                        this.route.navigateByUrl(this.returnUrl?this.returnUrl:'/');
                    }else{
                    //登录不成功
                    console.log(body.message);
                    }
                },
                error =>console.error(error)
            );
     }
}