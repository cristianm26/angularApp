import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IRQLogin } from '../../models/auth';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	userName = 'john';
	password = '123456';
	constructor(private router: Router, private loginService: AuthService) {}

	ngOnInit(): void {}

	clickLogin(): void {
		const user: IRQLogin = { username: this.userName, password: this.password };
		this.loginService.login(user).subscribe(
			(data) => {
				console.log(data);
			},
			(err) => {
				console.log(err);
			}
		);
		//void this.router.navigateByUrl('/dashboard');
	}

	onClickRegistrate(): void {
		void this.router.navigateByUrl('/register');
	}
}
