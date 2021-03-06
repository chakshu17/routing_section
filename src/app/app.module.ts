import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { AngularFireModule } from'@angular/fire';
import { AngularFireDatabaseModule } from'@angular/fire/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { HeaderComponent } from './component/header/header.component';
import { UsersComponent } from './component/users/users.component';
import { MessgeComponent } from './component/messge/messge.component';
import { UserService } from './service/user/user.service';
import { UserComponent } from './component/user/user.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { PlaceholderComponent } from './component/placeholder/placeholder.component';
import { OneComponent } from './component/one/one.component';
import { ParentComponent } from './component/parent/parent.component';
import { TwoComponent } from './component/two/two.component';
import { BuiltInStrDirComponent } from './component/built-in-str-dir/built-in-str-dir.component';
import { BuiltInAttrDirComponent } from './component/built-in-attr-dir/built-in-attr-dir.component';
import { ChangeCaseDirective } from './directives/changeCase/change-case.directive';
import { DirectiveHostComponent } from './component/directive-host/directive-host.component';
import { UnlessDirective } from './directives/unless/unless.directive';
import { ApendorPipe } from './pipes/apendor/apendor.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { NewUserComponent } from './component/new-user/new-user.component';
import { NewUserReactiveComponent } from './component/new-user-reactive/new-user-reactive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    UsersComponent,
    MessgeComponent,
    UserComponent,
    UserdetailsComponent,
    PlaceholderComponent,
    OneComponent,
    ParentComponent,
    TwoComponent,
    BuiltInStrDirComponent,
    BuiltInAttrDirComponent,
    ChangeCaseDirective,
    DirectiveHostComponent,
    UnlessDirective,
    ApendorPipe,
    FilterPipe,
    NewUserComponent,
    NewUserReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
