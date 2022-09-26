import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {
value1 !: number ;
value2 !: number;
result ! : number;
  constructor() { }

  ngOnInit(): void {
  }

  add() : void{
this.result = this.value1 + this.value2;
  }

  substract () : void {
    this.result = this.value1 - this.value2;
  }

  multilpy() : void {
    this.result = this.value1 * this.value2;
  }

  divide() : void {
    this.result = this.value1 / this.value2;
  }

}
