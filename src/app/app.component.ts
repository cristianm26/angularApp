import { Component, OnInit } from '@angular/core';
import { BadgeService } from './common/services/badge.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'angularapp';
	countTv = 0;
	constructor(private badgeService: BadgeService) {}

	ngOnInit(): void {
		this.badgeService.chanelBadge.subscribe((data) => {
			if (data) {
				this.countTv++;
			}
		});
	}
}
