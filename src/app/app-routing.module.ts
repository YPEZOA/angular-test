import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

const routes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'app', component:CommentsListComponent },
    { path: 'newPost', component: CommentFormComponent},
    { path: 'editPost/:id', component: EditPostComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
// Con esta constante se evita importar cada componente en el app.module
export const routingComponents = [CommentFormComponent, CommentsListComponent];