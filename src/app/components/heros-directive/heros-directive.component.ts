import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-heros-directive',
	templateUrl: './heros-directive.component.html',
	styleUrls: ['./heros-directive.component.css']
})
export class HerosDirectiveComponent implements OnInit, AfterViewInit {
	@ViewChild('miBoton') miBoton: ElementRef | undefined;
	showButtonSave = false;
	textoInput = '';
	heroeIngresado = '';

	heroeSeleccionado: IHero = <IHero>{};
	miArrayHeroes: IHero[] = [
		{
			id: 1,
			name: 'Superman'
		},
		{
			id: 2,
			name: 'Batman'
		},
		{
			id: 3,
			name: 'Spiderman'
		}
	];

	ngOnInit(): void {
		setTimeout(() => {
			this.showButtonSave = true;
		}, 3000);
	}
	ngAfterViewInit(): void {
		console.log(this.miBoton);
	}
	// Añadir Heroe
	addHero(): void {
		const objetoMayor = this.miArrayHeroes.reduce((prev, current) =>
			prev.id > current.id ? prev : current
		);

		this.miArrayHeroes.push({ id: objetoMayor.id + 1, name: this.textoInput });
	}

	updateHero(heroe: IHero): void {
		/* heroe.name = 'Aquaman'; */
		this.heroeSeleccionado = heroe;
	}

	modify(): void {
		//this.miArrayHeroes[0].name = 'Pantera Negra';
		this.refreshList();
	}

	private refreshList() {
		this.miArrayHeroes = [
			{
				id: 1,
				name: 'Superman'
			},
			{
				id: 2,
				name: 'Batman'
			},
			{
				id: 3,
				name: 'Spiderman'
			}
		];
	}

	trackByHero(hero: IHero): number {
		return hero.id;
	}
}

interface IHero {
	id: number;
	name: string;
}
