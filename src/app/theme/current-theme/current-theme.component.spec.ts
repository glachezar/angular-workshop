import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentThemeComponent } from './current-theme.component';

describe('CurrentThemeComponent', () => {
  let component: CurrentThemeComponent;
  let fixture: ComponentFixture<CurrentThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
