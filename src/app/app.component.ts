import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { SpinnerService } from './core/services/spinner.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private translateService: TranslateService,
    private route: Router,
    private spinnerService: SpinnerService,
    private toastService: ToastrService,
  ) {}

  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }
  
  toDashboard() {
    this.toastService.clear();
          this.toastService.success('Success',
            `Mudri je car`);
    this.route.navigateByUrl('nucleus');
  }

  toSignIn() {
    this.toastService.clear();
    this.toastService.warning('Success',
      `Mudri je car`);
    this.route.navigateByUrl('auth/sign-in');
  }

  toSignUp() {
    this.toastService.clear();
    this.toastService.error('Success',
      `Mudri je car`);
    this.route.navigateByUrl('auth/sign-up');
  }

  onSpin() {
    this.toastService.clear();
    this.toastService.info('Success',
      `Mudri je car`);
    this.spinnerService.registreLoader(new Promise((resovle, reject) => {
      setTimeout(() => {
        resovle();
      },5000);
    }))
    this.spinnerService.showSpinner();
  }
}
