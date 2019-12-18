import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseInputComponent } from './course-input.component';

describe('CourseInputComponent', () => {
  let component: CourseInputComponent;
  let fixture: ComponentFixture<CourseInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
