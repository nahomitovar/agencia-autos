import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStatusServiciosComponent } from './tab-status-servicios.component';

describe('TabStatusServiciosComponent', () => {
  let component: TabStatusServiciosComponent;
  let fixture: ComponentFixture<TabStatusServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabStatusServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabStatusServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
