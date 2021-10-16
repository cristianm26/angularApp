import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { ColorsTv, ResolutionsTv, SizesTv } from 'src/app/common/models/tv.type';
import { ITv } from '../../common/models/tv.interface';
import { CalculateService } from '../../common/services/calculate.service';
@Component({
	selector: 'app-options-tv',
	templateUrl: './options-tv.component.html',
	styleUrls: ['./options-tv.component.css']
})
export class OptionsTvComponent implements OnInit {
	colors: ColorsTv[] = ['#f44336', '#e91e63', '#9c27b0'];
	sizes: SizesTv[] = ['10 pulgadas', '19 pulgadas', '24 pulgadas', '32 pulgadas', '40 pulgadas'];
	resolutions: ResolutionsTv[] = ['4K ULTRA HD', 'HD', 'FULL HD', '8K'];

	optionsTv: ITv = <ITv>{};

	constructor(private calculateService: CalculateService) {}
	handleChangeComplete($event: ColorEvent): void {
		// const color = ($event as unknown) as ColorEvent;
		console.log($event.color);
	}

	ngOnInit(): void {
		console.log('Hola');
	}

	changeSize(): void {
		this.sendOptionTv();
	}

	changeResolution(): void {
		this.sendOptionTv();
	}

	private sendOptionTv() {
		this.calculateService.setProperties(this.optionsTv);
	}
}
