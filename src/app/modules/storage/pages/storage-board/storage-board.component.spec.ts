import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageBoardComponent } from './storage-board.component';

describe('StorageBoardComponent', () => {
  let component: StorageBoardComponent;
  let fixture: ComponentFixture<StorageBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
