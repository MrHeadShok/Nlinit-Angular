import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatpagePage } from './statpage.page';

describe('StatpagePage', () => {
  let component: StatpagePage;
  let fixture: ComponentFixture<StatpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
