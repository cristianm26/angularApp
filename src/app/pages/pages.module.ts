import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DigimonsComponent } from './dashboard/digimons/digimons.component';
import { MedabotsComponent } from './dashboard/medabots/medabots.component';
import { DashboardComponentsModule } from '../commons/shared/dashboard-components/dashboard-components.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardRoutingModule } from './page-routing.module';
@NgModule({
	declarations: [DashboardComponent, DigimonsComponent, MedabotsComponent],
	imports: [CommonModule, DashboardComponentsModule, MatSidenavModule, DashboardRoutingModule]
})
export class PagesModule {}
