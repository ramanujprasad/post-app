import { Component, Input } from '@angular/core';
import { iPosts } from './../../interfaces/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post?: iPosts;
  public hasFlipped: boolean = false;
  constructor() {}

  public flipIt(): void {
    this.hasFlipped = !this.hasFlipped;
  }
}
