import { NgModule,Optional,SkipSelf } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { QuestionnaireService } from './services/questionnaire.service';
import { RegisterService } from './services/register.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/index';
import { LoginService } from './services/index';

@NgModule({
    imports: [CommonModule,RouterModule],
    exports: [],
    declarations: [],
    providers: [
        QuestionnaireService,
        RegisterService,
        UserService,
        LoginService,
        AuthGuardService]
})
export class CoreModule { 
    constructor(@Optional() @SkipSelf() parentModule :CoreModule){
        if(parentModule){
            throw new Error(
                'CoreModule is already laoded,Import it in the AppModule only'
            );
            
        }
    }
}
