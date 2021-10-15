import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-heros',
	templateUrl: './heros.component.html',
	styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
	titulo = 'Hola Mundo';
	miNgClass = false;

	decimalPrueba = 551331521;
	currencyNumber = 1000;

	miPromesa = new Promise((resolve) => {
		setTimeout(() => {
			resolve('Esto es una promesa');
		}, 3000);
	});

	miDate = new Date();
	ngOnInit(): void {
		this.miNgClass = false;
	}
}
