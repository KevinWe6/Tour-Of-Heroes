import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleUrlsComponent } from './style-urls.component';

describe('StyleUrlsComponent', () => {
  let component: StyleUrlsComponent;
  let fixture: ComponentFixture<StyleUrlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyleUrlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
