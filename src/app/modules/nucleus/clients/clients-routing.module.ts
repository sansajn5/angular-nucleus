import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients.component';
import { AllClientsComponent } from './all-clients/all-clients.component';
import { NewClientComponent } from './new-client/new-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      { path: 'all', component: AllClientsComponent },
      { path: 'new', component: NewClientComponent },
      { path: 'edit/:id', component: EditClientComponent },
      { path: '**', component: AllClientsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
