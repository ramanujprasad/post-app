import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { iPosts } from './../interfaces/posts';
import { LoadingStateService } from './loading-state.service';
import { LoadingState } from './loading-state.constant';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(
    private http: HttpClient,
    private loadingStateService: LoadingStateService
  ) {}

  public getPosts(): Observable<iPosts[]> {
    this.loadingStateService.setLoadingState(LoadingState.loading);
    return this.http.get<iPosts[]>(`${environment.apiUrl}/posts`).pipe(
      map((res: iPosts[]) => {
        this.loadingStateService.setLoadingState(LoadingState.finished);
        return res;
      }),
      catchError(err => {
        this.loadingStateService.setLoadingState(LoadingState.error);
        return throwError(`An error has occurred ${err}`);
      })
    );
  }
}
