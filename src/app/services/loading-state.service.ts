import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { LoadingState } from './loading-state.constant';

@Injectable({
  providedIn: 'root'
})
export class LoadingStateService {
  constructor() {}

  private _loadingState: Subject<LoadingState> = new BehaviorSubject<
    LoadingState
  >(LoadingState.loading);

  public loadingState: Observable<
    LoadingState
  > = this._loadingState.asObservable();

  public setLoadingState(loadingState: LoadingState): void {
    this._loadingState.next(loadingState);
  }

  public getLoadingState(): Observable<LoadingState> {
    return this._loadingState.asObservable();
  }
}
