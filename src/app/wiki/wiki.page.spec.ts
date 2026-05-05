import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { wikiPage } from './wiki.page';

describe('wikiPage', () => {
  let component: wikiPage;
  let fixture: ComponentFixture<wikiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [wikiPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(wikiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
