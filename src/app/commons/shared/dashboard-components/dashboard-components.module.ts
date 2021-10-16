import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { AnimeComponent } from '../../components/anime/anime.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [HeaderComponent, MenuComponent, AnimeComponent],
	imports: [
		CommonModule,
		RouterModule,
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatListModule
	],
	exports: [HeaderComponent, MenuComponent, AnimeComponent]
})
export class DashboardComponentsModule {}
