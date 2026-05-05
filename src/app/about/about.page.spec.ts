import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { aboutPage } from './about.page';

describe('aboutPage', () => {
  let component: aboutPage;
  let fixture: ComponentFixture<aboutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [aboutPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(aboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
