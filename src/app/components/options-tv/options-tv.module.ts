import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsTvComponent } from './options-tv.component';
import { TotalModule } from '../total/total.module';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ColorCircleModule } from 'ngx-color/circle';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [OptionsTvComponent],
	imports: [
		CommonModule,
		FormsModule,
		TotalModule,
		MatSlideToggleModule,
		MatSelectModule,
		ColorCircleModule
	],
	exports: [OptionsTvComponent]
})
export class OptionsTvModule {}
