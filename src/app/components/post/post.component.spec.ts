import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  @Component({
    selector: 'mock-component',
    template: '<app-post [post]="post"></app-post>'
  })
  class MockComponent { }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call flipIt and toggle to true', () => {
    component.hasFlipped = false;
    component.flipIt();
    expect(component.hasFlipped).toEqual(true);
  });

  it('should call flipIt and toggle to false', () => {
    component.hasFlipped = true;
    component.flipIt();
    expect(component.hasFlipped).toEqual(false);
  });
});
