import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateUrlComponent } from './template-url.component';

describe('TemplateUrlComponent', () => {
  let component: TemplateUrlComponent;
  let fixture: ComponentFixture<TemplateUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateUrlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
