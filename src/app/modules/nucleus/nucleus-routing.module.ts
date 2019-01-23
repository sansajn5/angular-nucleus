import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NucleusComponent } from './nucleus.component';

const routes: Routes = [
  {
    path: '',
    component: NucleusComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'clients', loadChildren: `./clients/clients.module#ClientsModule`},
      { path: '**', component: DashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NucleusRoutingModule {}
