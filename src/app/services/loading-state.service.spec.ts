import { TestBed, async } from '@angular/core/testing';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { LoadingStateService } from './loading-state.service';
import { LoadingState } from './loading-state.constant';

describe('LoadingStateService', () => {
  let service: LoadingStateService;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(LoadingStateService);
    expect(service).toBeTruthy();
  });

  it('should call next loading state', () => {
    const subjectMock = new BehaviorSubject<LoadingState>(LoadingState.loading);
    subjectMock.subscribe(res => expect(res).toEqual(LoadingState.loading));
    subjectMock.next(LoadingState.loading);
  });

});
