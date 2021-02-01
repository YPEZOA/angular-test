import { Component, OnInit } from '@angular/core';
import { PostI } from '../../models/post.interface';
import { DataApiService } from '../../services/data-api-service.service';
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  // Inicializar propiedades
  nuevoForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });

  constructor(private api:DataApiService, private router:Router) { }

  ngOnInit(): void {
  }

  postForm(form:PostI) {
    this.api.addPost(form).subscribe(data => {
      console.log(data);
    })
  }

}
