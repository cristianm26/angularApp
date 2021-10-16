import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './pages/auth/login-pages/login-pages.component';
import { RegisterComponent } from './commons/components/register/register.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginPagesComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
	},
	{
		path: '**',
		redirectTo: '/login',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
