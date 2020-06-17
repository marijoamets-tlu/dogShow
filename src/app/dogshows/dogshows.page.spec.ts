import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DogshowsPage } from './dogshows.page';

describe('DogshowsPage', () => {
  let component: DogshowsPage;
  let fixture: ComponentFixture<DogshowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogshowsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DogshowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
