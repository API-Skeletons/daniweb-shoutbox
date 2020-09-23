import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { IndexComponent } from './component/index/index.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { DataModule } from '@module/data/data.module';
import { LoginComponent } from './component/login/login.component';
import { NgbDropdownModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DefaultLayoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['https://www.daniweb.com'],
        sendAccessToken: true
      }
    }),
    DataModule,
    NgbModule,
    NgbDropdownModule,
    NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
