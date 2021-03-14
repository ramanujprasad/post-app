import { Component } from '@angular/core';
import { PostsService } from './../../services/posts.service';
import { LoadingStateService } from './../../services/loading-state.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
  loadingState$ = this.loadingStateService.getLoadingState();
  posts$ = this.postsService.getPosts();

  constructor(
    private postsService: PostsService,
    private loadingStateService: LoadingStateService
  ) {}
}
