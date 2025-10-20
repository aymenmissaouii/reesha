import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkeletonLineComponent } from './skeleton-line.component';

describe('SkeletonLineComponent', () => {
  let component: SkeletonLineComponent;
  let fixture: ComponentFixture<SkeletonLineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SkeletonLineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
