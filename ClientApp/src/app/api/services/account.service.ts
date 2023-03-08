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
export class AccountService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAccountGet
   */
  static readonly ApiAccountGetPath = '/api/Account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<AccountViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiAccountGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Plain(params?: {
  }): Observable<AccountViewModel> {

    return this.apiAccountGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AccountViewModel>) => r.body as AccountViewModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<AccountViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiAccountGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Json(params?: {
  }): Observable<AccountViewModel> {

    return this.apiAccountGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AccountViewModel>) => r.body as AccountViewModel)
    );
  }

  /**
   * Path part for operation apiAccountAllGet
   */
  static readonly ApiAccountAllGetPath = '/api/Account/All';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountAllGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<AccountViewModel>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AccountViewModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountAllGet$Plain(params?: {
  }): Observable<Array<AccountViewModel>> {

    return this.apiAccountAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AccountViewModel>>) => r.body as Array<AccountViewModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountAllGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<AccountViewModel>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.ApiAccountAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AccountViewModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountAllGet$Json(params?: {
  }): Observable<Array<AccountViewModel>> {

    return this.apiAccountAllGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AccountViewModel>>) => r.body as Array<AccountViewModel>)
    );
  }

}
