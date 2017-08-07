import {Component, Input, OnInit} from '@angular/core';
import {PriceQuote} from "../price-quote/price-quote.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // demo for data input
  // @Input()
  // stockCode:string;
  // @Input()
  // amount:number;
  // constructor() {
  //   setInterval(() => {
  //     this.stockCode = "Apple";
  //   },3000);
  // }

  // demo for data output Mediator Pattern
  @Input()
  priceQuote: PriceQuote;
  constructor() {}

  ngOnInit() {
  }

}
