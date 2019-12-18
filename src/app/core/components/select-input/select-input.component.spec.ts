import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectInputComponent } from './select-input.component';

describe('SelectInputComponent', () => {
  let component: SelectInputComponent;
  let fixture: ComponentFixture<SelectInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
