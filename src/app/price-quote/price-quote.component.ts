import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {
  stockCode:string = "IBM";
  price: number;
  // @Output('priceChange') // 单独给事件指定名字
  @Output() // 不单独指定名字的话，事件名就是这里的属性名
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

  constructor() {
    setInterval(() => {
      let priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100*Math.random());
      this.price = priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);
    }, 1000);
  }

  @Output()
  buy: EventEmitter<PriceQuote> = new EventEmitter();
  // 但按钮buy被点击时，将此时的数据发射出去
  buyStock(event) {
    this.buy.emit(new PriceQuote(this.stockCode, this.price));
  }

  ngOnInit() {
  }

}

export class PriceQuote {
  constructor(public stockCode:string,
               public lastPrice:number) {

  }
}
