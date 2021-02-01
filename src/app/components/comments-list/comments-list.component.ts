import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api-service.service';
import { Router } from '@angular/router';
import { CommentsList } from 'src/app/models/commentList.interface';
import { stringify } from '@angular/compiler/src/util';
import { PostI } from 'src/app/models/post.interface';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  constructor(private apiService:DataApiService, private router:Router) { }
  
  allComments: CommentsList[];

  ngOnInit(): void {
    this.apiService.getAllComment().subscribe( data => {
      this.allComments = data;
    });
  }

  editPost(id) {
    this.router.navigate(['editPost', id]);
  }
}