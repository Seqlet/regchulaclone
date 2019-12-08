import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisoutPage } from './regisout.page';

describe('RegisoutPage', () => {
  let component: RegisoutPage;
  let fixture: ComponentFixture<RegisoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
