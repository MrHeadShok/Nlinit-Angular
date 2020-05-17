import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectspagePage } from './projectspage.page';

describe('ProjectspagePage', () => {
  let component: ProjectspagePage;
  let fixture: ComponentFixture<ProjectspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
