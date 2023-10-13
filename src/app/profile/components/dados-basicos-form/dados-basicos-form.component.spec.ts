import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBasicosFormComponent } from './dados-basicos-form.component';

describe('DadosBasicosFormComponent', () => {
  let component: DadosBasicosFormComponent;
  let fixture: ComponentFixture<DadosBasicosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosBasicosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosBasicosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
