import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PostI } from '../models/post.interface';
import { CommentsList } from '../models/commentList.interface';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  URL_API = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getAllComment():Observable<CommentsList[]> {
    return this.http.get<CommentsList[]>(this.URL_API);
  }

  getSinglePost(id):Observable<PostI> {
    return this.http.get<PostI>(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
  }

  putPost(form:PostI):Observable<Response> {    
    return this.http.put<Response>(`https://jsonplaceholder.typicode.com/posts?id=1`, form)
  }

  deletePost(form:PostI):Observable<Response> {
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: form
    }
    return this.http.delete<Response>('https://jsonplaceholder.typicode.com/posts/1', options);
  }

  addPost(form:PostI) : Observable<Response> {
    return this.http.post<Response>('https://jsonplaceholder.typicode.com/posts', form)
  }

}
