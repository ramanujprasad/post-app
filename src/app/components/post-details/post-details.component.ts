import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  posts$ = this.postService.getPosts();

  constructor(private postService: PostsService) {}

  ngOnInit(): void {}
}
