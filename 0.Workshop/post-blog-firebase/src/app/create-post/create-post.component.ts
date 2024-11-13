import { Component } from '@angular/core';
import { FirebasePostService } from '../services/firebase-post.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  newPost = { title: '', content: '' };

  constructor(private postService: FirebasePostService){}

  onSubmit(){
    const postId = Date.now().toString();
    this.postService.createPost(postId, this.newPost.title, this.newPost.content)
      .subscribe(() => {
        alert('Post submitted successfully!');
        this.newPost = { title: '', content: '' };
      });
  }

}
