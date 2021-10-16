import { Component } from '@angular/core';
import { BadgeService } from 'src/app/common/services/badge.service';

@Component({
	selector: 'app-card-tv',
	templateUrl: './card-tv.component.html',
	styleUrls: ['./card-tv.component.css']
})
export class CardTvComponent {
	constructor(private badgeService: BadgeService) {}

	saveTv(): void {
		this.badgeService.addTv();
	}
}
