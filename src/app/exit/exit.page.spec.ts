import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { exitPage } from './exit.page';

describe('exitPage', () => {
  let component: exitPage;
  let fixture: ComponentFixture<exitPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [exitPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(exitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
