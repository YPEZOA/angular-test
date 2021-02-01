import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { PostI } from '../../models/post.interface';
import { DataApiService } from '../../services/data-api-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:DataApiService) { }
  // Datos desde models
  infoPost: PostI;

  editForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });

  ngOnInit(): void {
    let postId = this.activerouter.snapshot.paramMap.get('id');

    this.api.getSinglePost(postId).subscribe(data => {
      this.infoPost = data[0];
      this.editForm.setValue({
        'title': this.infoPost.title,
        'body': this.infoPost.body
      });
    })
  }

  submitForm(form:PostI) {
    this.api.putPost(form).subscribe( data => {
      console.log(data);
    })
  }

  deletePost() {
    let datos:PostI = this.editForm.value;
    this.api.deletePost(datos).subscribe(data => {
      console.log(data);
      
    })
  }
}
