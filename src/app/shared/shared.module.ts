import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbThemeModule, NbCheckboxModule, NbMenuModule, NbStepperModule, NbCardModule, NbSelectModule, NbInputModule } from '@nebular/theme';
import {FlexLayoutModule} from '@angular/flex-layout';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgxSpinnerModule,
  TranslateModule,
  NbLayoutModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbMenuModule,
  NbStepperModule,
  NbCardModule,
  FlexLayoutModule,
  NbSelectModule,
  NbInputModule,
];

const COMPONENTS = [];

const SHARED_PROVIDERS = [
  NbSidebarService,
];

@NgModule({
  imports: [...MODULES,
    NbThemeModule.forRoot(),],
  exports: [...MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [...SHARED_PROVIDERS ],
    }
  }
}
