import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{HomeComponent}from './home/home.component'
import { StockComponent } from './stock/stock.component';
import { Home1Component } from './Home1/Home1.component';
import { UserComponent } from './user/user.component';
import { UidComponent } from './uid/uid.component';
import { IdComponent } from './id/id.component';
import { McComponent } from './mc/mc.component';
const routes: Routes = [{path:"login",
component:LoginComponent
},
{path:"signup",component:SignupComponent},
{path:"home",component:HomeComponent},
{path:'Home1',component:Home1Component},
{path:'',component:StockComponent},
{path:'stock',component:StockComponent},
{path:'user',component:UserComponent},
{path:'uid',component:UidComponent},
{path:'id',component:IdComponent},
{path:'mc',component:McComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
