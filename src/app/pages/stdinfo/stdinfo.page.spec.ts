import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StdinfoPage } from './stdinfo.page';

describe('StdinfoPage', () => {
  let component: StdinfoPage;
  let fixture: ComponentFixture<StdinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StdinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
