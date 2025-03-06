/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAuthCheckLoginGet$Json } from '../fn/auth/api-auth-check-login-get-json';
import { ApiAuthCheckLoginGet$Json$Params } from '../fn/auth/api-auth-check-login-get-json';
import { apiAuthCheckLoginGet$Plain } from '../fn/auth/api-auth-check-login-get-plain';
import { ApiAuthCheckLoginGet$Plain$Params } from '../fn/auth/api-auth-check-login-get-plain';
import { apiAuthRefreshTokenPost$Json } from '../fn/auth/api-auth-refresh-token-post-json';
import { ApiAuthRefreshTokenPost$Json$Params } from '../fn/auth/api-auth-refresh-token-post-json';
import { apiAuthRefreshTokenPost$Plain } from '../fn/auth/api-auth-refresh-token-post-plain';
import { ApiAuthRefreshTokenPost$Plain$Params } from '../fn/auth/api-auth-refresh-token-post-plain';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthCheckLoginGet()` */
  static readonly ApiAuthCheckLoginGetPath = '/api/Auth/CheckLogin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthCheckLoginGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthCheckLoginGet$Plain$Response(params?: ApiAuthCheckLoginGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiAuthCheckLoginGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthCheckLoginGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthCheckLoginGet$Plain(params?: ApiAuthCheckLoginGet$Plain$Params, context?: HttpContext): Observable<boolean> {
    return this.apiAuthCheckLoginGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthCheckLoginGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthCheckLoginGet$Json$Response(params?: ApiAuthCheckLoginGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiAuthCheckLoginGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthCheckLoginGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthCheckLoginGet$Json(params?: ApiAuthCheckLoginGet$Json$Params, context?: HttpContext): Observable<boolean> {
    return this.apiAuthCheckLoginGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `apiAuthRefreshTokenPost()` */
  static readonly ApiAuthRefreshTokenPostPath = '/api/Auth/RefreshToken';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRefreshTokenPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthRefreshTokenPost$Plain$Response(params?: ApiAuthRefreshTokenPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiAuthRefreshTokenPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthRefreshTokenPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthRefreshTokenPost$Plain(params?: ApiAuthRefreshTokenPost$Plain$Params, context?: HttpContext): Observable<boolean> {
    return this.apiAuthRefreshTokenPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRefreshTokenPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthRefreshTokenPost$Json$Response(params?: ApiAuthRefreshTokenPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiAuthRefreshTokenPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthRefreshTokenPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthRefreshTokenPost$Json(params?: ApiAuthRefreshTokenPost$Json$Params, context?: HttpContext): Observable<boolean> {
    return this.apiAuthRefreshTokenPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

}
