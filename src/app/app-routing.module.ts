import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AuthGuard } from './core/security/auth.guard';

const ROUTE_MODULES = './modules';

/**
 * If there is no jwt auth remove canActivate
 * name of app is atm nucleus, change it
 */
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: `${ROUTE_MODULES}/auth/auth.module#AuthModule`,
  },

  {
    path: 'nucleus',
    // canActivate: [AuthGuard],
    loadChildren: `${ROUTE_MODULES}/nucleus/nucleus.module#NucleusModule`,
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
