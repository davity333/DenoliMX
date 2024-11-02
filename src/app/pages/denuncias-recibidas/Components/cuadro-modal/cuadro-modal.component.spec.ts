import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroModalComponent } from './cuadro-modal.component';

describe('CuadroModalComponent', () => {
  let component: CuadroModalComponent;
  let fixture: ComponentFixture<CuadroModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadroModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
