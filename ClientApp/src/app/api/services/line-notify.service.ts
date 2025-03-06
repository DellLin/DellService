/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiLineNotifyGetStateGet$Json } from '../fn/line-notify/api-line-notify-get-state-get-json';
import { ApiLineNotifyGetStateGet$Json$Params } from '../fn/line-notify/api-line-notify-get-state-get-json';
import { apiLineNotifyGetStateGet$Plain } from '../fn/line-notify/api-line-notify-get-state-get-plain';
import { ApiLineNotifyGetStateGet$Plain$Params } from '../fn/line-notify/api-line-notify-get-state-get-plain';
import { apiLineNotifyLineNotifyAuthGet$Json } from '../fn/line-notify/api-line-notify-line-notify-auth-get-json';
import { ApiLineNotifyLineNotifyAuthGet$Json$Params } from '../fn/line-notify/api-line-notify-line-notify-auth-get-json';
import { apiLineNotifyLineNotifyAuthGet$Plain } from '../fn/line-notify/api-line-notify-line-notify-auth-get-plain';
import { ApiLineNotifyLineNotifyAuthGet$Plain$Params } from '../fn/line-notify/api-line-notify-line-notify-auth-get-plain';
import { apiLineNotifyLineNotifyCallBackGet } from '../fn/line-notify/api-line-notify-line-notify-call-back-get';
import { ApiLineNotifyLineNotifyCallBackGet$Params } from '../fn/line-notify/api-line-notify-line-notify-call-back-get';
import { apiLineNotifyRevokeGet$Json } from '../fn/line-notify/api-line-notify-revoke-get-json';
import { ApiLineNotifyRevokeGet$Json$Params } from '../fn/line-notify/api-line-notify-revoke-get-json';
import { apiLineNotifyRevokeGet$Plain } from '../fn/line-notify/api-line-notify-revoke-get-plain';
import { ApiLineNotifyRevokeGet$Plain$Params } from '../fn/line-notify/api-line-notify-revoke-get-plain';
import { apiLineNotifySendMessagetoAllPost$Json } from '../fn/line-notify/api-line-notify-send-messageto-all-post-json';
import { ApiLineNotifySendMessagetoAllPost$Json$Params } from '../fn/line-notify/api-line-notify-send-messageto-all-post-json';
import { apiLineNotifySendMessagetoAllPost$Plain } from '../fn/line-notify/api-line-notify-send-messageto-all-post-plain';
import { ApiLineNotifySendMessagetoAllPost$Plain$Params } from '../fn/line-notify/api-line-notify-send-messageto-all-post-plain';
import { apiLineNotifySendMessagetoSelfPost$Json } from '../fn/line-notify/api-line-notify-send-messageto-self-post-json';
import { ApiLineNotifySendMessagetoSelfPost$Json$Params } from '../fn/line-notify/api-line-notify-send-messageto-self-post-json';
import { apiLineNotifySendMessagetoSelfPost$Plain } from '../fn/line-notify/api-line-notify-send-messageto-self-post-plain';
import { ApiLineNotifySendMessagetoSelfPost$Plain$Params } from '../fn/line-notify/api-line-notify-send-messageto-self-post-plain';

@Injectable({ providedIn: 'root' })
export class LineNotifyService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiLineNotifyLineNotifyAuthGet()` */
  static readonly ApiLineNotifyLineNotifyAuthGetPath = '/api/LineNotify/LineNotifyAuth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyLineNotifyAuthGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyLineNotifyAuthGet$Plain$Response(params?: ApiLineNotifyLineNotifyAuthGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apiLineNotifyLineNotifyAuthGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyLineNotifyAuthGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyLineNotifyAuthGet$Plain(params?: ApiLineNotifyLineNotifyAuthGet$Plain$Params, context?: HttpContext): Observable<string> {
    return this.apiLineNotifyLineNotifyAuthGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyLineNotifyAuthGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyLineNotifyAuthGet$Json$Response(params?: ApiLineNotifyLineNotifyAuthGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apiLineNotifyLineNotifyAuthGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyLineNotifyAuthGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyLineNotifyAuthGet$Json(params?: ApiLineNotifyLineNotifyAuthGet$Json$Params, context?: HttpContext): Observable<string> {
    return this.apiLineNotifyLineNotifyAuthGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `apiLineNotifyLineNotifyCallBackGet()` */
  static readonly ApiLineNotifyLineNotifyCallBackGetPath = '/api/LineNotify/LineNotifyCallBack';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyLineNotifyCallBackGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyLineNotifyCallBackGet$Response(params?: ApiLineNotifyLineNotifyCallBackGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiLineNotifyLineNotifyCallBackGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyLineNotifyCallBackGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyLineNotifyCallBackGet(params?: ApiLineNotifyLineNotifyCallBackGet$Params, context?: HttpContext): Observable<void> {
    return this.apiLineNotifyLineNotifyCallBackGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiLineNotifyGetStateGet()` */
  static readonly ApiLineNotifyGetStateGetPath = '/api/LineNotify/GetState';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyGetStateGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyGetStateGet$Plain$Response(params?: ApiLineNotifyGetStateGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiLineNotifyGetStateGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyGetStateGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyGetStateGet$Plain(params?: ApiLineNotifyGetStateGet$Plain$Params, context?: HttpContext): Observable<boolean> {
    return this.apiLineNotifyGetStateGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyGetStateGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyGetStateGet$Json$Response(params?: ApiLineNotifyGetStateGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiLineNotifyGetStateGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyGetStateGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyGetStateGet$Json(params?: ApiLineNotifyGetStateGet$Json$Params, context?: HttpContext): Observable<boolean> {
    return this.apiLineNotifyGetStateGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `apiLineNotifyRevokeGet()` */
  static readonly ApiLineNotifyRevokeGetPath = '/api/LineNotify/Revoke';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyRevokeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyRevokeGet$Plain$Response(params?: ApiLineNotifyRevokeGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiLineNotifyRevokeGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyRevokeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyRevokeGet$Plain(params?: ApiLineNotifyRevokeGet$Plain$Params, context?: HttpContext): Observable<boolean> {
    return this.apiLineNotifyRevokeGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyRevokeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyRevokeGet$Json$Response(params?: ApiLineNotifyRevokeGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiLineNotifyRevokeGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyRevokeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyRevokeGet$Json(params?: ApiLineNotifyRevokeGet$Json$Params, context?: HttpContext): Observable<boolean> {
    return this.apiLineNotifyRevokeGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `apiLineNotifySendMessagetoSelfPost()` */
  static readonly ApiLineNotifySendMessagetoSelfPostPath = '/api/LineNotify/SendMessagetoSelf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifySendMessagetoSelfPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoSelfPost$Plain$Response(params?: ApiLineNotifySendMessagetoSelfPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiLineNotifySendMessagetoSelfPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifySendMessagetoSelfPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoSelfPost$Plain(params?: ApiLineNotifySendMessagetoSelfPost$Plain$Params, context?: HttpContext): Observable<boolean> {
    return this.apiLineNotifySendMessagetoSelfPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifySendMessagetoSelfPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoSelfPost$Json$Response(params?: ApiLineNotifySendMessagetoSelfPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiLineNotifySendMessagetoSelfPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifySendMessagetoSelfPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoSelfPost$Json(params?: ApiLineNotifySendMessagetoSelfPost$Json$Params, context?: HttpContext): Observable<boolean> {
    return this.apiLineNotifySendMessagetoSelfPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `apiLineNotifySendMessagetoAllPost()` */
  static readonly ApiLineNotifySendMessagetoAllPostPath = '/api/LineNotify/SendMessagetoAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifySendMessagetoAllPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoAllPost$Plain$Response(params?: ApiLineNotifySendMessagetoAllPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiLineNotifySendMessagetoAllPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifySendMessagetoAllPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoAllPost$Plain(params?: ApiLineNotifySendMessagetoAllPost$Plain$Params, context?: HttpContext): Observable<boolean> {
    return this.apiLineNotifySendMessagetoAllPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifySendMessagetoAllPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoAllPost$Json$Response(params?: ApiLineNotifySendMessagetoAllPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiLineNotifySendMessagetoAllPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifySendMessagetoAllPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoAllPost$Json(params?: ApiLineNotifySendMessagetoAllPost$Json$Params, context?: HttpContext): Observable<boolean> {
    return this.apiLineNotifySendMessagetoAllPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

}
