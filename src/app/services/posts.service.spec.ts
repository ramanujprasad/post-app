import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostsService } from './posts.service';
import { iPosts } from './../interfaces/posts';
import { LoadingStateService } from './loading-state.service';

describe('PostsService', () => {
  let service: PostsService;
  let http: HttpClient;
  let loadingStateService: LoadingStateService;

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
      providers: [PostsService, HttpClient, LoadingStateService]
    });
    service = TestBed.inject(PostsService);
    http = TestBed.inject(HttpClient);
    loadingStateService = TestBed.inject(LoadingStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the successful response from service', () => {
    spyOn(http, 'get').and.returnValue(of(postMock));
    service.getPosts().subscribe((response: iPosts[]) => {
      expect(response).toEqual(postMock);
      expect(http.get).toHaveBeenCalled();
    });
  });

  it('should get the throw the error from service', () => {
    spyOn(loadingStateService, 'setLoadingState').and.callThrough();
    spyOn(http, 'get').and.returnValue(throwError('something went wrong'));
    service.getPosts().subscribe(
      res => {},
      err => {
        expect(err).toEqual(`An error has occurred something went wrong`);
      }
    );
  });
});
