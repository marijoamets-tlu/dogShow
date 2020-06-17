import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DogshowPage } from './dogshow.page';

describe('DogshowPage', () => {
  let component: DogshowPage;
  let fixture: ComponentFixture<DogshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogshowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DogshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
