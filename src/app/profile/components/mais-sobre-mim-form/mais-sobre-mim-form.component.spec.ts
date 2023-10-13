import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisSobreMimFormComponent } from './mais-sobre-mim-form.component';

describe('MaisSobreMimFormComponent', () => {
  let component: MaisSobreMimFormComponent;
  let fixture: ComponentFixture<MaisSobreMimFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisSobreMimFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisSobreMimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
