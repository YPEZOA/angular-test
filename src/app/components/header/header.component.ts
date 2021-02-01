import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public addComment: String;
  public title: String;

  constructor(private router: Router) { 
    this.addComment = 'Agregar nuevo comentario';
    this.title = 'Senegocia-test'
  }

  ngOnInit(): void {
    
  }

  addPost() {
    // Ruta a agregar Post
    this.router.navigate(['newPost']);
  }

}
