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

import { PttSearchRule } from '../models/ptt-search-rule';

@Injectable({
  providedIn: 'root',
})
export class PttSpiderService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPttSpiderGet
   */
  static readonly ApiPttSpiderGetPath = '/api/PttSpider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttSpiderGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<PttSearchRule>>> {

    const rb = new RequestBuilder(this.rootUrl, PttSpiderService.ApiPttSpiderGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PttSearchRule>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttSpiderGet$Plain(params?: {
  }): Observable<Array<PttSearchRule>> {

    return this.apiPttSpiderGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PttSearchRule>>) => r.body as Array<PttSearchRule>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttSpiderGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<PttSearchRule>>> {

    const rb = new RequestBuilder(this.rootUrl, PttSpiderService.ApiPttSpiderGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PttSearchRule>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttSpiderGet$Json(params?: {
  }): Observable<Array<PttSearchRule>> {

    return this.apiPttSpiderGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PttSearchRule>>) => r.body as Array<PttSearchRule>)
    );
  }

  /**
   * Path part for operation apiPttSpiderPut
   */
  static readonly ApiPttSpiderPutPath = '/api/PttSpider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPut$Plain$Response(params?: {
    body?: PttSearchRule
  }): Observable<StrictHttpResponse<PttSearchRule>> {

    const rb = new RequestBuilder(this.rootUrl, PttSpiderService.ApiPttSpiderPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PttSearchRule>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPut$Plain(params?: {
    body?: PttSearchRule
  }): Observable<PttSearchRule> {

    return this.apiPttSpiderPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PttSearchRule>) => r.body as PttSearchRule)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPut$Json$Response(params?: {
    body?: PttSearchRule
  }): Observable<StrictHttpResponse<PttSearchRule>> {

    const rb = new RequestBuilder(this.rootUrl, PttSpiderService.ApiPttSpiderPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PttSearchRule>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPut$Json(params?: {
    body?: PttSearchRule
  }): Observable<PttSearchRule> {

    return this.apiPttSpiderPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PttSearchRule>) => r.body as PttSearchRule)
    );
  }

  /**
   * Path part for operation apiPttSpiderPost
   */
  static readonly ApiPttSpiderPostPath = '/api/PttSpider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPost$Plain$Response(params?: {
    body?: PttSearchRule
  }): Observable<StrictHttpResponse<PttSearchRule>> {

    const rb = new RequestBuilder(this.rootUrl, PttSpiderService.ApiPttSpiderPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PttSearchRule>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPost$Plain(params?: {
    body?: PttSearchRule
  }): Observable<PttSearchRule> {

    return this.apiPttSpiderPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PttSearchRule>) => r.body as PttSearchRule)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPost$Json$Response(params?: {
    body?: PttSearchRule
  }): Observable<StrictHttpResponse<PttSearchRule>> {

    const rb = new RequestBuilder(this.rootUrl, PttSpiderService.ApiPttSpiderPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PttSearchRule>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPost$Json(params?: {
    body?: PttSearchRule
  }): Observable<PttSearchRule> {

    return this.apiPttSpiderPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PttSearchRule>) => r.body as PttSearchRule)
    );
  }

  /**
   * Path part for operation apiPttSpiderDelete
   */
  static readonly ApiPttSpiderDeletePath = '/api/PttSpider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderDelete$Plain$Response(params?: {
    body?: PttSearchRule
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, PttSpiderService.ApiPttSpiderDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiPttSpiderDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderDelete$Plain(params?: {
    body?: PttSearchRule
  }): Observable<boolean> {

    return this.apiPttSpiderDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderDelete$Json$Response(params?: {
    body?: PttSearchRule
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, PttSpiderService.ApiPttSpiderDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiPttSpiderDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderDelete$Json(params?: {
    body?: PttSearchRule
  }): Observable<boolean> {

    return this.apiPttSpiderDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
