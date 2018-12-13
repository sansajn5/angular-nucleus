import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class SpinnerService {

  /**
   * Array of promise (events/functions)
   */
  public loaders: Promise<any>[] = [];

  constructor(
    private spinner: NgxSpinnerService,
  ) { }

  /**
   * Method for registration promises
   * @param method 
   */
  registreLoader(method: Promise<any>): void {
    this.loaders.push(method);
  }

  /**
   * Method for starting spinner
   */
  showSpinner() {
    this.spinner.show();
    this.execute();
  }

  /**
   * Method for executing promises
   */
  execute() {
    Promise.all(this.loaders).then(() => {
      this.hideSpinner();
    });
  }

  /**
   * Method for stoping spinner
   */
  hideSpinner() {
    this.spinner.hide();
  }
}
