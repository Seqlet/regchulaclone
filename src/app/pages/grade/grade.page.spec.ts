import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradePage } from './grade.page';

describe('GradePage', () => {
  let component: GradePage;
  let fixture: ComponentFixture<GradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
