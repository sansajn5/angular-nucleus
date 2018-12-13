import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NucleusComponent } from './nucleus.component';
import { NucleusRoutingModule } from './nucleus-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [
  NucleusComponent,
  DashboardComponent,
];

const MODULES = [
  NucleusRoutingModule,
  SharedModule,
];

/**
 * SHOULD BE CHANGED TO EACH MODULE UNDER NUCLEUS IS ALSO MODULE
 * Usage same as AppModule and AppRouting
 */
@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
})
export class NucleusModule { }