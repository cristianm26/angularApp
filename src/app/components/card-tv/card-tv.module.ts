import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { OptionsTvModule } from '../options-tv/options-tv.module';

import { CardTvComponent } from './card-tv.component';
@NgModule({
	declarations: [CardTvComponent],
	imports: [CommonModule, MatCardModule, OptionsTvModule, MatButtonModule],
	exports: [CardTvComponent]
})
export class CardTvModule {}
