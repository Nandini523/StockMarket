import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes}from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NvBarComponent } from './nv-bar/nv-bar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Home1Component } from './home1/home1.component';
import { UserComponent } from './user/user.component';
import { UidComponent } from './uid/uid.component';
import { IdComponent } from './id/id.component';
import { McComponent } from './mc/mc.component';


@NgModule({
  declarations: [
    AppComponent,
    NvBarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    StockComponent,
    Home1Component,
    UserComponent,
    UidComponent,
    IdComponent,
    McComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'Login',component:LoginComponent},
      {path: 'signup',component:SignupComponent},
      {path:'home',component:HomeComponent},
      {path:'',component:StockComponent},
      {path:'stock',component:StockComponent},
      {path:'Home1',component:Home1Component},
      {path:'user',component:UserComponent},
      {path:'uid',component:UidComponent},
      {path:'id',component:IdComponent},
      {path:'mc',component:McComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
