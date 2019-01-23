import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllClientsComponent } from './all-clients/all-clients.component';
import { NewClientComponent } from './new-client/new-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ClientsRoutingModule } from './clients-routing.module';

const COMPONENTS = [
  ClientsComponent,
  AllClientsComponent,
  NewClientComponent,
  EditClientComponent,
];

const MODULES = [
  SharedModule,
  ClientsRoutingModule,
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class ClientsModule { }
