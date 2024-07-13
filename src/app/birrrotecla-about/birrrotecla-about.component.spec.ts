import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirrroteclaAboutComponent } from './birrrotecla-about.component';

describe('BirrroteclaAboutComponent', () => {
  let component: BirrroteclaAboutComponent;
  let fixture: ComponentFixture<BirrroteclaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirrroteclaAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirrroteclaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
