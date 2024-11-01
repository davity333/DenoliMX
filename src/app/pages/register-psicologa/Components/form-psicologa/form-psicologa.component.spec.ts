import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPsicologaComponent } from './form-psicologa.component';

describe('FormPsicologaComponent', () => {
  let component: FormPsicologaComponent;
  let fixture: ComponentFixture<FormPsicologaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPsicologaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPsicologaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
