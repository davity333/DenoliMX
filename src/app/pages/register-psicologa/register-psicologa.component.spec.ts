import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPsicologaComponent } from './register-psicologa.component';

describe('RegisterPsicologaComponent', () => {
  let component: RegisterPsicologaComponent;
  let fixture: ComponentFixture<RegisterPsicologaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPsicologaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPsicologaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
