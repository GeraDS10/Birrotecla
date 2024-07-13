import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirroteclaBeersComponent } from './birrotecla-beers.component';

describe('BirroteclaBeersComponent', () => {
  let component: BirroteclaBeersComponent;
  let fixture: ComponentFixture<BirroteclaBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirroteclaBeersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirroteclaBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
