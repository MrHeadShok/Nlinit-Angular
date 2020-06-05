import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Add2teamComponent } from './add2team.component';

describe('Add2teamComponent', () => {
  let component: Add2teamComponent;
  let fixture: ComponentFixture<Add2teamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add2teamComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Add2teamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
