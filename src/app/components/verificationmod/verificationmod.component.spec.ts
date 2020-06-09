import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificationmodComponent } from './verificationmod.component';

describe('VerificationmodComponent', () => {
  let component: VerificationmodComponent;
  let fixture: ComponentFixture<VerificationmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationmodComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificationmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
