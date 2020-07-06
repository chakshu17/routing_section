import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
