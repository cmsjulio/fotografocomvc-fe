import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryCardComponent } from './image-gallery-card.component';

describe('ImageGalleryCardComponent', () => {
  let component: ImageGalleryCardComponent;
  let fixture: ComponentFixture<ImageGalleryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGalleryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
