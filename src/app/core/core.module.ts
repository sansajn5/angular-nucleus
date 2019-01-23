import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { AuthService } from '../modules/auth/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { SpinnerService } from './services/spinner.service';
import { ClientService } from '../modules/nucleus/clients/client.service';

const SERVICES = [
  AuthService,
  LocalStorageService,
  SpinnerService,
  ClientService,
];

@NgModule({
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    // Import guard
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`,
      );
    }
  }
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [...SERVICES],
    };
  }
}
