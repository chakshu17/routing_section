import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { HomeComponent } from './component/home/home.component';
// import { BlogComponent } from './component/blog/blog.component';
// import { AboutComponent } from './component/about/about.component';
import { UsersComponent } from './component/users/users.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { MessgeComponent } from './component/messge/messge.component';
import { ConfirmationGuard } from './guards/confirmation/confirmation.guard';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { PlaceholderComponent } from './component/placeholder/placeholder.component';
import { ParentComponent } from './component/parent/parent.component';
import { BuiltInStrDirComponent } from './component/built-in-str-dir/built-in-str-dir.component';
import { BuiltInAttrDirComponent } from './component/built-in-attr-dir/built-in-attr-dir.component';
import { DirectiveHostComponent } from './component/directive-host/directive-host.component';
import { NewUserComponent } from './component/new-user/new-user.component';
import { NewUserReactiveComponent } from './component/new-user-reactive/new-user-reactive.component';


const routes: Routes = [
  { path:'home', component:HomeComponent },
  // { path:'blog', component:BlogComponent,canActivate:[ AuthGuard ] },
  // { path:'about', component:AboutComponent },
  { path:'users' , component:UsersComponent,children:[
    {path:':id',component:UserdetailsComponent},
    {path:'',component:PlaceholderComponent}
  ]},
  {path:'parent', component:ParentComponent},
  {path:'new-user', component:NewUserComponent},
  {path:'new-user-reactive', component:NewUserReactiveComponent},
  {path:'str-dir', component:BuiltInStrDirComponent},
  {path:'attr-dir', component:BuiltInAttrDirComponent},
  {path:'directives', component:DirectiveHostComponent},

  { path:'message', component:MessgeComponent,canDeactivate:[ ConfirmationGuard]},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  providers:[AuthGuard,ConfirmationGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
