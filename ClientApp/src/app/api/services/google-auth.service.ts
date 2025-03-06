/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiGoogleAuthCallBackGet } from '../fn/google-auth/api-google-auth-call-back-get';
import { ApiGoogleAuthCallBackGet$Params } from '../fn/google-auth/api-google-auth-call-back-get';
import { apiGoogleAuthGet$Json } from '../fn/google-auth/api-google-auth-get-json';
import { ApiGoogleAuthGet$Json$Params } from '../fn/google-auth/api-google-auth-get-json';
import { apiGoogleAuthGet$Plain } from '../fn/google-auth/api-google-auth-get-plain';
import { ApiGoogleAuthGet$Plain$Params } from '../fn/google-auth/api-google-auth-get-plain';

@Injectable({ providedIn: 'root' })
export class GoogleAuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiGoogleAuthGet()` */
  static readonly ApiGoogleAuthGetPath = '/api/GoogleAuth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoogleAuthGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoogleAuthGet$Plain$Response(params?: ApiGoogleAuthGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apiGoogleAuthGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGoogleAuthGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoogleAuthGet$Plain(params?: ApiGoogleAuthGet$Plain$Params, context?: HttpContext): Observable<string> {
    return this.apiGoogleAuthGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoogleAuthGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoogleAuthGet$Json$Response(params?: ApiGoogleAuthGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apiGoogleAuthGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGoogleAuthGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoogleAuthGet$Json(params?: ApiGoogleAuthGet$Json$Params, context?: HttpContext): Observable<string> {
    return this.apiGoogleAuthGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `apiGoogleAuthCallBackGet()` */
  static readonly ApiGoogleAuthCallBackGetPath = '/api/GoogleAuth/CallBack';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoogleAuthCallBackGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoogleAuthCallBackGet$Response(params?: ApiGoogleAuthCallBackGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiGoogleAuthCallBackGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGoogleAuthCallBackGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoogleAuthCallBackGet(params?: ApiGoogleAuthCallBackGet$Params, context?: HttpContext): Observable<void> {
    return this.apiGoogleAuthCallBackGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
