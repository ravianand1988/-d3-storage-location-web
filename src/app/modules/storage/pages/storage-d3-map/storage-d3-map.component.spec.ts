import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageD3MapComponent } from './storage-d3-map.component';

describe('StorageD3MapComponent', () => {
  let component: StorageD3MapComponent;
  let fixture: ComponentFixture<StorageD3MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageD3MapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageD3MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
