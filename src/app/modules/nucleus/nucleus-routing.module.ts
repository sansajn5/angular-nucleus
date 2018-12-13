import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NucleusComponent } from './nucleus.component';

/**
 * SHOULD BE CHANGED TO EACH MODULE UNDER NUCLEUS IS ALSO MODULE
 * Usage same as AppModule and AppRouting
 */
const routes: Routes = [
  {
    path: '',
    component: NucleusComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '**', component: DashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NucleusRoutingModule {}
