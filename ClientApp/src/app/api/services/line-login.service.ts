/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AccountViewModel } from '../models/account-view-model';
import { apiLineLoginLineLoginCallBackGet } from '../fn/line-login/api-line-login-line-login-call-back-get';
import { ApiLineLoginLineLoginCallBackGet$Params } from '../fn/line-login/api-line-login-line-login-call-back-get';
import { apiLineLoginLineLoginGet$Json } from '../fn/line-login/api-line-login-line-login-get-json';
import { ApiLineLoginLineLoginGet$Json$Params } from '../fn/line-login/api-line-login-line-login-get-json';
import { apiLineLoginLineLoginGet$Plain } from '../fn/line-login/api-line-login-line-login-get-plain';
import { ApiLineLoginLineLoginGet$Plain$Params } from '../fn/line-login/api-line-login-line-login-get-plain';
import { apiLineLoginSyncLineProfileGet$Json } from '../fn/line-login/api-line-login-sync-line-profile-get-json';
import { ApiLineLoginSyncLineProfileGet$Json$Params } from '../fn/line-login/api-line-login-sync-line-profile-get-json';
import { apiLineLoginSyncLineProfileGet$Plain } from '../fn/line-login/api-line-login-sync-line-profile-get-plain';
import { ApiLineLoginSyncLineProfileGet$Plain$Params } from '../fn/line-login/api-line-login-sync-line-profile-get-plain';

@Injectable({ providedIn: 'root' })
export class LineLoginService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiLineLoginLineLoginGet()` */
  static readonly ApiLineLoginLineLoginGetPath = '/api/LineLogin/LineLogin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineLoginLineLoginGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginLineLoginGet$Plain$Response(params?: ApiLineLoginLineLoginGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apiLineLoginLineLoginGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineLoginLineLoginGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginLineLoginGet$Plain(params?: ApiLineLoginLineLoginGet$Plain$Params, context?: HttpContext): Observable<string> {
    return this.apiLineLoginLineLoginGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineLoginLineLoginGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginLineLoginGet$Json$Response(params?: ApiLineLoginLineLoginGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apiLineLoginLineLoginGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineLoginLineLoginGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginLineLoginGet$Json(params?: ApiLineLoginLineLoginGet$Json$Params, context?: HttpContext): Observable<string> {
    return this.apiLineLoginLineLoginGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `apiLineLoginLineLoginCallBackGet()` */
  static readonly ApiLineLoginLineLoginCallBackGetPath = '/api/LineLogin/LineLoginCallBack';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineLoginLineLoginCallBackGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginLineLoginCallBackGet$Response(params?: ApiLineLoginLineLoginCallBackGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiLineLoginLineLoginCallBackGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineLoginLineLoginCallBackGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginLineLoginCallBackGet(params?: ApiLineLoginLineLoginCallBackGet$Params, context?: HttpContext): Observable<void> {
    return this.apiLineLoginLineLoginCallBackGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiLineLoginSyncLineProfileGet()` */
  static readonly ApiLineLoginSyncLineProfileGetPath = '/api/LineLogin/SyncLineProfile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineLoginSyncLineProfileGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginSyncLineProfileGet$Plain$Response(params?: ApiLineLoginSyncLineProfileGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountViewModel>> {
    return apiLineLoginSyncLineProfileGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineLoginSyncLineProfileGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginSyncLineProfileGet$Plain(params?: ApiLineLoginSyncLineProfileGet$Plain$Params, context?: HttpContext): Observable<AccountViewModel> {
    return this.apiLineLoginSyncLineProfileGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountViewModel>): AccountViewModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineLoginSyncLineProfileGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginSyncLineProfileGet$Json$Response(params?: ApiLineLoginSyncLineProfileGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountViewModel>> {
    return apiLineLoginSyncLineProfileGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineLoginSyncLineProfileGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginSyncLineProfileGet$Json(params?: ApiLineLoginSyncLineProfileGet$Json$Params, context?: HttpContext): Observable<AccountViewModel> {
    return this.apiLineLoginSyncLineProfileGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountViewModel>): AccountViewModel => r.body)
    );
  }

}
