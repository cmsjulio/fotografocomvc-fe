import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarCidadeComponent } from './selecionar-cidade.component';

describe('SelecionarCidadeComponent', () => {
  let component: SelecionarCidadeComponent;
  let fixture: ComponentFixture<SelecionarCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarCidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
