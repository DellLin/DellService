/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class LineNotifyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiLineNotifyLineNotifyAuthGet
   */
  static readonly ApiLineNotifyLineNotifyAuthGetPath = '/api/LineNotify/LineNotifyAuth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyLineNotifyAuthGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyLineNotifyAuthGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, LineNotifyService.ApiLineNotifyLineNotifyAuthGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyLineNotifyAuthGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyLineNotifyAuthGet$Plain(params?: {
  }): Observable<string> {

    return this.apiLineNotifyLineNotifyAuthGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyLineNotifyAuthGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyLineNotifyAuthGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, LineNotifyService.ApiLineNotifyLineNotifyAuthGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyLineNotifyAuthGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyLineNotifyAuthGet$Json(params?: {
  }): Observable<string> {

    return this.apiLineNotifyLineNotifyAuthGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiLineNotifyLineNotifyCallBackGet
   */
  static readonly ApiLineNotifyLineNotifyCallBackGetPath = '/api/LineNotify/LineNotifyCallBack';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyLineNotifyCallBackGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyLineNotifyCallBackGet$Response(params?: {
    code?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LineNotifyService.ApiLineNotifyLineNotifyCallBackGetPath, 'get');
    if (params) {
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyLineNotifyCallBackGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyLineNotifyCallBackGet(params?: {
    code?: string;
  }): Observable<void> {

    return this.apiLineNotifyLineNotifyCallBackGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiLineNotifyGetStateGet
   */
  static readonly ApiLineNotifyGetStateGetPath = '/api/LineNotify/GetState';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyGetStateGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyGetStateGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, LineNotifyService.ApiLineNotifyGetStateGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyGetStateGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyGetStateGet$Plain(params?: {
  }): Observable<boolean> {

    return this.apiLineNotifyGetStateGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyGetStateGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyGetStateGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, LineNotifyService.ApiLineNotifyGetStateGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyGetStateGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyGetStateGet$Json(params?: {
  }): Observable<boolean> {

    return this.apiLineNotifyGetStateGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiLineNotifyRevokeGet
   */
  static readonly ApiLineNotifyRevokeGetPath = '/api/LineNotify/Revoke';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyRevokeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyRevokeGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, LineNotifyService.ApiLineNotifyRevokeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyRevokeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyRevokeGet$Plain(params?: {
  }): Observable<boolean> {

    return this.apiLineNotifyRevokeGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifyRevokeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyRevokeGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, LineNotifyService.ApiLineNotifyRevokeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifyRevokeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifyRevokeGet$Json(params?: {
  }): Observable<boolean> {

    return this.apiLineNotifyRevokeGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiLineNotifySendMessagetoSelfPost
   */
  static readonly ApiLineNotifySendMessagetoSelfPostPath = '/api/LineNotify/SendMessagetoSelf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifySendMessagetoSelfPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoSelfPost$Plain$Response(params?: {
    message?: string;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, LineNotifyService.ApiLineNotifySendMessagetoSelfPostPath, 'post');
    if (params) {
      rb.query('message', params.message, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifySendMessagetoSelfPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoSelfPost$Plain(params?: {
    message?: string;
  }): Observable<boolean> {

    return this.apiLineNotifySendMessagetoSelfPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifySendMessagetoSelfPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoSelfPost$Json$Response(params?: {
    message?: string;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, LineNotifyService.ApiLineNotifySendMessagetoSelfPostPath, 'post');
    if (params) {
      rb.query('message', params.message, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifySendMessagetoSelfPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoSelfPost$Json(params?: {
    message?: string;
  }): Observable<boolean> {

    return this.apiLineNotifySendMessagetoSelfPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiLineNotifySendMessagetoAllPost
   */
  static readonly ApiLineNotifySendMessagetoAllPostPath = '/api/LineNotify/SendMessagetoAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifySendMessagetoAllPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoAllPost$Plain$Response(params?: {
    message?: string;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, LineNotifyService.ApiLineNotifySendMessagetoAllPostPath, 'post');
    if (params) {
      rb.query('message', params.message, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifySendMessagetoAllPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoAllPost$Plain(params?: {
    message?: string;
  }): Observable<boolean> {

    return this.apiLineNotifySendMessagetoAllPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineNotifySendMessagetoAllPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoAllPost$Json$Response(params?: {
    message?: string;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, LineNotifyService.ApiLineNotifySendMessagetoAllPostPath, 'post');
    if (params) {
      rb.query('message', params.message, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineNotifySendMessagetoAllPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineNotifySendMessagetoAllPost$Json(params?: {
    message?: string;
  }): Observable<boolean> {

    return this.apiLineNotifySendMessagetoAllPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
