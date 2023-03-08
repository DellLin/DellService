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

import { AccountViewModel } from '../models/account-view-model';

@Injectable({
  providedIn: 'root',
})
export class LineLoginService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiLineLoginLineLoginGet
   */
  static readonly ApiLineLoginLineLoginGetPath = '/api/LineLogin/LineLogin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineLoginLineLoginGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginLineLoginGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, LineLoginService.ApiLineLoginLineLoginGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiLineLoginLineLoginGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginLineLoginGet$Plain(params?: {
  }): Observable<string> {

    return this.apiLineLoginLineLoginGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineLoginLineLoginGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginLineLoginGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, LineLoginService.ApiLineLoginLineLoginGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiLineLoginLineLoginGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginLineLoginGet$Json(params?: {
  }): Observable<string> {

    return this.apiLineLoginLineLoginGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiLineLoginLineLoginCallBackGet
   */
  static readonly ApiLineLoginLineLoginCallBackGetPath = '/api/LineLogin/LineLoginCallBack';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineLoginLineLoginCallBackGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginLineLoginCallBackGet$Response(params?: {
    code?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LineLoginService.ApiLineLoginLineLoginCallBackGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiLineLoginLineLoginCallBackGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginLineLoginCallBackGet(params?: {
    code?: string;
  }): Observable<void> {

    return this.apiLineLoginLineLoginCallBackGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiLineLoginSyncLineProfileGet
   */
  static readonly ApiLineLoginSyncLineProfileGetPath = '/api/LineLogin/SyncLineProfile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineLoginSyncLineProfileGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginSyncLineProfileGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<AccountViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, LineLoginService.ApiLineLoginSyncLineProfileGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AccountViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineLoginSyncLineProfileGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginSyncLineProfileGet$Plain(params?: {
  }): Observable<AccountViewModel> {

    return this.apiLineLoginSyncLineProfileGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AccountViewModel>) => r.body as AccountViewModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLineLoginSyncLineProfileGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginSyncLineProfileGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<AccountViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, LineLoginService.ApiLineLoginSyncLineProfileGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AccountViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLineLoginSyncLineProfileGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLineLoginSyncLineProfileGet$Json(params?: {
  }): Observable<AccountViewModel> {

    return this.apiLineLoginSyncLineProfileGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AccountViewModel>) => r.body as AccountViewModel)
    );
  }

}
