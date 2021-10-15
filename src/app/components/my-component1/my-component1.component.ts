import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-my-component1',
	templateUrl: './my-component1.component.html',
	styleUrls: ['./my-component1.component.css']
})
export class MyComponent1Component {
	@Input() tittle = '';
	@Output() sendMessage = new EventEmitter<string>();

	sendMessageFather(): void {
		this.sendMessage.emit('Yo soy tu Hijo');
	}
}
