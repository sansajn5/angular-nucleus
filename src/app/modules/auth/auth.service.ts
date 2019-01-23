import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';

const httpOptionsWithJSON = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class AuthService {

  private BASE_URL: string = `${environment.endpoint}api`;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private toastService: ToastrService,
    private translateService: TranslateService,
  ) { }

   /**
   * Method calling API for sign in process
   * @param user
   */
  public signIn(user: User): Observable<any> {
    return this.http
      .post(`${this.BASE_URL}/auth/sign-in`, JSON.stringify(user), httpOptionsWithJSON);
  }

  /**
   * Method calling API for sign up process
   * @param user 
   */
  public signUp(user: User): Observable<any> {
    return this.http
      .post(`${this.BASE_URL}/auth/sign-up`, JSON.stringify(user), httpOptionsWithJSON)
  }

  /**
   * Method calling storage to destroy token and all user data
   */
  public async logout() {
    this.localStorageService.logoutUser();
    this.toastService.clear();
    this.toastService.success(await this.translateService.get('AUTH.LOGOUT').toPromise(),
      await this.translateService.get('GLOBAL.GOOD_BYE').toPromise());
  }

}
