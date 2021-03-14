import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostDetailsComponent } from './post-details.component';
import { PostsService } from './../../services/posts.service';
import { iPosts } from './../../interfaces/posts';

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;
  let postService: PostsService;
  const postMock = [
    {
      userId: 1,
      id: 1,
      title: 'test',
      body: 'test'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostDetailsComponent],
      imports: [HttpClientTestingModule],
      providers: [PostsService, HttpClient]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    postService = TestBed.inject(PostsService);
    spyOn(postService, 'getPosts').and.callFake(
      (): Observable<Array<iPosts>> => of(postMock)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
