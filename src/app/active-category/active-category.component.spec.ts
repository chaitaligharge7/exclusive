import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCategoryComponent } from './active-category.component';

describe('ActiveCategoryComponent', () => {
  let component: ActiveCategoryComponent;
  let fixture: ComponentFixture<ActiveCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
