import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqViewItemsBoxComponent } from './eq-view-items-box.component';

describe('EqViewItemsBoxComponent', () => {
  let component: EqViewItemsBoxComponent;
  let fixture: ComponentFixture<EqViewItemsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqViewItemsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqViewItemsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
