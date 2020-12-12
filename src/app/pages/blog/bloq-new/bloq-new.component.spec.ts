import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqNewComponent } from './bloq-new.component';

describe('BloqNewComponent', () => {
  let component: BloqNewComponent;
  let fixture: ComponentFixture<BloqNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
