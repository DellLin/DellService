/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';
import { GoogleAuthService } from './services/google-auth.service';
import { LineLoginService } from './services/line-login.service';
import { LineNotifyService } from './services/line-notify.service';
import { MessageLogService } from './services/message-log.service';
import { PttCatchHistoryService } from './services/ptt-catch-history.service';
import { PttSpiderService } from './services/ptt-spider.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AccountService,
    AuthService,
    GoogleAuthService,
    LineLoginService,
    LineNotifyService,
    MessageLogService,
    PttCatchHistoryService,
    PttSpiderService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
