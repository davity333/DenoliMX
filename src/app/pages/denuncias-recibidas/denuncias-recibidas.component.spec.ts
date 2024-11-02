import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciasRecibidasComponent } from './denuncias-recibidas.component';

describe('DenunciasRecibidasComponent', () => {
  let component: DenunciasRecibidasComponent;
  let fixture: ComponentFixture<DenunciasRecibidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DenunciasRecibidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenunciasRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
