import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemViewInfoComponent } from './item-view-info.component';

describe('ItemViewInfoComponent', () => {
  let component: ItemViewInfoComponent;
  let fixture: ComponentFixture<ItemViewInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemViewInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemViewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
