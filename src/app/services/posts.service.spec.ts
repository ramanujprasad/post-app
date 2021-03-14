import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { PostsService } from './posts.service';
import { iPosts } from './../interfaces/posts';

describe('PostsService', () => {
  let service: PostsService;
  let http: HttpClient;

  const postMock = [
    {
      userId: 1,
      id: 1,
      title: 'test',
      body: 'test'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService, HttpClient]
    });
    service = TestBed.inject(PostsService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
