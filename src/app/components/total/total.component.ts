import { Component } from '@angular/core';
import { CalculateService } from '../../common/services/calculate.service';

@Component({
	selector: 'app-total',
	templateUrl: './total.component.html',
	styleUrls: ['./total.component.css']
})
export class TotalComponent {
	price = 0;
	constructor(public calculateService: CalculateService) {}

	/* 	calculatePrice(): void {
		this.calculateService.chanelCalculate.subscribe((valor: number) => {
			this.price = valor;
		});
	} */
}
