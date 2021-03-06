import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceQuoteComponent } from './price-quote.component';

describe('PriceQuoteComponent', () => {
  let component: PriceQuoteComponent;
  let fixture: ComponentFixture<PriceQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
