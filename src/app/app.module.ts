// Módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './pages/auth/auth.module';
// Componentes
import { AppComponent } from './app.component';
import { AuthComponent } from './commons/services/auth/auth.component';

@NgModule({
	declarations: [AppComponent, AuthComponent],
	imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, AuthModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
