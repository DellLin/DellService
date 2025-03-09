/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiLineBotGetStateGet$Json } from '../fn/line-bot/api-line-bot-get-state-get-json';
import { ApiLineBotGetStateGet$Json$Params } from '../fn/line-bot/api-line-bot-get-state-get-json';
import { apiLineBotGetStateGet$Plain } from '../fn/line-bot/api-line-bot-get-state-get-plain';
import { ApiLineBotGetStateGet$Plain$Params } from '../fn/line-bot/api-line-bot-get-state-get-plain';
import { apiLineBotPost } from '../fn/line-bot/api-line-bot-post';
import { ApiLineBotPost$Params } from '../fn/line-bot/api-line-bot-post';
import { apiLineBotSendMessagetoSelfPost$Json } from '../fn/line-bot/api-line-bot-send-messageto-self-post-json';
import { ApiLineBotSendMessagetoSelfPost$Json$Params } from '../fn/line-bot/api-line-bot-send-messageto-self-post-json';
import { apiLineBotSendMessagetoSelfPost$Plain } from '../fn/line-bot/api-line-bot-send-messageto-self-post-plain';
import { ApiLineBotSendMessagetoSelfPost$Plain$Params } from '../fn/line-bot/api-line-bot-send-messageto-self-post-plain';

@Injectable({ providedIn: 'root' })
export class LineBotService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiLineBotPost()` */
  static readonly ApiLineBotPostPath = '/api/LineBot';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineBotPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLineBotPost$Response(params?: ApiLineBotPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiLineBotPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineBotPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLineBotPost(params?: ApiLineBotPost$Params, context?: HttpContext): Observable<void> {
    return this.apiLineBotPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiLineBotGetStateGet()` */
  static readonly ApiLineBotGetStateGetPath = '/api/LineBot/GetState';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineBotGetStateGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineBotGetStateGet$Plain$Response(params?: ApiLineBotGetStateGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiLineBotGetStateGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineBotGetStateGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineBotGetStateGet$Plain(params?: ApiLineBotGetStateGet$Plain$Params, context?: HttpContext): Observable<boolean> {
    return this.apiLineBotGetStateGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineBotGetStateGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineBotGetStateGet$Json$Response(params?: ApiLineBotGetStateGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiLineBotGetStateGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineBotGetStateGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineBotGetStateGet$Json(params?: ApiLineBotGetStateGet$Json$Params, context?: HttpContext): Observable<boolean> {
    return this.apiLineBotGetStateGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `apiLineBotSendMessagetoSelfPost()` */
  static readonly ApiLineBotSendMessagetoSelfPostPath = '/api/LineBot/SendMessagetoSelf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineBotSendMessagetoSelfPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineBotSendMessagetoSelfPost$Plain$Response(params?: ApiLineBotSendMessagetoSelfPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiLineBotSendMessagetoSelfPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineBotSendMessagetoSelfPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineBotSendMessagetoSelfPost$Plain(params?: ApiLineBotSendMessagetoSelfPost$Plain$Params, context?: HttpContext): Observable<boolean> {
    return this.apiLineBotSendMessagetoSelfPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineBotSendMessagetoSelfPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineBotSendMessagetoSelfPost$Json$Response(params?: ApiLineBotSendMessagetoSelfPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiLineBotSendMessagetoSelfPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLineBotSendMessagetoSelfPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineBotSendMessagetoSelfPost$Json(params?: ApiLineBotSendMessagetoSelfPost$Json$Params, context?: HttpContext): Observable<boolean> {
    return this.apiLineBotSendMessagetoSelfPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

}
