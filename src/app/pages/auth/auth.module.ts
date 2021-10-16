import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPagesComponent } from './login-pages/login-pages.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthComponentsModule } from 'src/app/commons/shared/auth-components/auth-components.module';

@NgModule({
	declarations: [LoginPagesComponent, RegisterPageComponent],
	imports: [CommonModule, AuthComponentsModule],
	exports: [LoginPagesComponent, RegisterPageComponent]
})
export class AuthModule {}
