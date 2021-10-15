import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MyComponent1Component } from './my-component1/my-component1.component';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { MyComponent3Component } from './my-component3/my-component3.component';
import { HerosComponent } from './heros/heros.component';
import localeEsEcuador from '@angular/common/locales/es-EC';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { FormsModule } from '@angular/forms';
import { HerosDirectiveComponent } from './heros-directive/heros-directive.component';
// Configuración Local
registerLocaleData(localeEsEcuador);

@NgModule({
	declarations: [
		MyComponent1Component,
		MyComponent2Component,
		MyComponent3Component,
		HerosComponent,
		CustomCurrencyPipe,
		HerosDirectiveComponent
	],
	imports: [CommonModule, FormsModule],
	providers: [{ provide: LOCALE_ID, useValue: 'es-EC' }],
	exports: [
		MyComponent1Component,
		MyComponent2Component,
		HerosComponent,
		MyComponent3Component,
		HerosDirectiveComponent
	]
})
export class MyComponentsModule {}
