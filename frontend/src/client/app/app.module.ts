import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { EditModule } from './edit/edit.module';
import { CenterModule } from './center/center.module';
import { SharedModule } from './shared/shared.module';
import { PublishedModule } from './published/published.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';


@NgModule({
  imports: [
    BrowserModule, 
    HttpModule, 
    AppRoutingModule, 
    CoreModule,
    AboutModule, 
    HomeModule, 
    SharedModule,
    EditModule,
    CenterModule,
    AdminModule,
    UserModule,
    PublishedModule
    ],
  declarations: [AppComponent],
  providers: [
    {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
