import { Injectable } from '@angular/core';
import { authConfig, loginOptions } from '@env';
import { UserService } from '@module/data/service/user.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { from, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: ReplaySubject<any>;

  public constructor(
    private oauthService: OAuthService,
    private userService: UserService
  ) {
    this.user$ = new ReplaySubject(1);

    this.user$.subscribe(user => console.log(user));
  }

  public login(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    if (! this.oauthService.hasValidAccessToken()) {
      from(this.oauthService.tryLogin(loginOptions)).subscribe(success => {
        if (! this.oauthService.hasValidAccessToken()) {
          this.oauthService.initImplicitFlow();
        } else {
          this.userService.getUserProfile().subscribe(user => this.user$.next(user));
        }
      });
    } else {
      this.userService.getUserProfile().subscribe(user => this.user$.next(user));
    }
  }

  public logout(): void {
    this.oauthService.logOut();
  }
}
