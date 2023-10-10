import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCardComponent } from './detalhes-card.component';

describe('DetalhesCardComponent', () => {
  let component: DetalhesCardComponent;
  let fixture: ComponentFixture<DetalhesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
