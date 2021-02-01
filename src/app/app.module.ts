import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CommentComponent } from './components/comments-list/comment/comment/comment.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommentComponent,
    routingComponents,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
