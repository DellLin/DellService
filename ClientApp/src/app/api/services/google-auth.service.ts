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
export class GoogleAuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiGoogleAuthGet
   */
  static readonly ApiGoogleAuthGetPath = '/api/GoogleAuth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoogleAuthGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoogleAuthGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, GoogleAuthService.ApiGoogleAuthGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiGoogleAuthGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoogleAuthGet$Plain(params?: {
  }): Observable<string> {

    return this.apiGoogleAuthGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoogleAuthGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoogleAuthGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, GoogleAuthService.ApiGoogleAuthGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiGoogleAuthGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoogleAuthGet$Json(params?: {
  }): Observable<string> {

    return this.apiGoogleAuthGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiGoogleAuthCallBackGet
   */
  static readonly ApiGoogleAuthCallBackGetPath = '/api/GoogleAuth/CallBack';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGoogleAuthCallBackGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoogleAuthCallBackGet$Response(params?: {
    code?: string;
    error?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GoogleAuthService.ApiGoogleAuthCallBackGetPath, 'get');
    if (params) {
      rb.query('code', params.code, {});
      rb.query('error', params.error, {});
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
   * To access the full response (for headers, for example), `apiGoogleAuthCallBackGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGoogleAuthCallBackGet(params?: {
    code?: string;
    error?: string;
  }): Observable<void> {

    return this.apiGoogleAuthCallBackGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
