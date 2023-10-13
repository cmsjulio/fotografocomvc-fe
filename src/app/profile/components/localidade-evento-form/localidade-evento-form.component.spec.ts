import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadeEventoFormComponent } from './localidade-evento-form.component';

describe('LocalidadeEventoFormComponent', () => {
  let component: LocalidadeEventoFormComponent;
  let fixture: ComponentFixture<LocalidadeEventoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadeEventoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadeEventoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
