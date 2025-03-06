/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiPttSpiderDelete$Json } from '../fn/ptt-spider/api-ptt-spider-delete-json';
import { ApiPttSpiderDelete$Json$Params } from '../fn/ptt-spider/api-ptt-spider-delete-json';
import { apiPttSpiderDelete$Plain } from '../fn/ptt-spider/api-ptt-spider-delete-plain';
import { ApiPttSpiderDelete$Plain$Params } from '../fn/ptt-spider/api-ptt-spider-delete-plain';
import { apiPttSpiderGet$Json } from '../fn/ptt-spider/api-ptt-spider-get-json';
import { ApiPttSpiderGet$Json$Params } from '../fn/ptt-spider/api-ptt-spider-get-json';
import { apiPttSpiderGet$Plain } from '../fn/ptt-spider/api-ptt-spider-get-plain';
import { ApiPttSpiderGet$Plain$Params } from '../fn/ptt-spider/api-ptt-spider-get-plain';
import { apiPttSpiderPost$Json } from '../fn/ptt-spider/api-ptt-spider-post-json';
import { ApiPttSpiderPost$Json$Params } from '../fn/ptt-spider/api-ptt-spider-post-json';
import { apiPttSpiderPost$Plain } from '../fn/ptt-spider/api-ptt-spider-post-plain';
import { ApiPttSpiderPost$Plain$Params } from '../fn/ptt-spider/api-ptt-spider-post-plain';
import { apiPttSpiderPut$Json } from '../fn/ptt-spider/api-ptt-spider-put-json';
import { ApiPttSpiderPut$Json$Params } from '../fn/ptt-spider/api-ptt-spider-put-json';
import { apiPttSpiderPut$Plain } from '../fn/ptt-spider/api-ptt-spider-put-plain';
import { ApiPttSpiderPut$Plain$Params } from '../fn/ptt-spider/api-ptt-spider-put-plain';
import { PttSearchRule } from '../models/ptt-search-rule';

@Injectable({ providedIn: 'root' })
export class PttSpiderService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPttSpiderGet()` */
  static readonly ApiPttSpiderGetPath = '/api/PttSpider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttSpiderGet$Plain$Response(params?: ApiPttSpiderGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PttSearchRule>>> {
    return apiPttSpiderGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttSpiderGet$Plain(params?: ApiPttSpiderGet$Plain$Params, context?: HttpContext): Observable<Array<PttSearchRule>> {
    return this.apiPttSpiderGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PttSearchRule>>): Array<PttSearchRule> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttSpiderGet$Json$Response(params?: ApiPttSpiderGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PttSearchRule>>> {
    return apiPttSpiderGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttSpiderGet$Json(params?: ApiPttSpiderGet$Json$Params, context?: HttpContext): Observable<Array<PttSearchRule>> {
    return this.apiPttSpiderGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PttSearchRule>>): Array<PttSearchRule> => r.body)
    );
  }

  /** Path part for operation `apiPttSpiderPut()` */
  static readonly ApiPttSpiderPutPath = '/api/PttSpider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPut$Plain$Response(params?: ApiPttSpiderPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PttSearchRule>> {
    return apiPttSpiderPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPut$Plain(params?: ApiPttSpiderPut$Plain$Params, context?: HttpContext): Observable<PttSearchRule> {
    return this.apiPttSpiderPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PttSearchRule>): PttSearchRule => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPut$Json$Response(params?: ApiPttSpiderPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PttSearchRule>> {
    return apiPttSpiderPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPut$Json(params?: ApiPttSpiderPut$Json$Params, context?: HttpContext): Observable<PttSearchRule> {
    return this.apiPttSpiderPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PttSearchRule>): PttSearchRule => r.body)
    );
  }

  /** Path part for operation `apiPttSpiderPost()` */
  static readonly ApiPttSpiderPostPath = '/api/PttSpider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPost$Plain$Response(params?: ApiPttSpiderPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PttSearchRule>> {
    return apiPttSpiderPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPost$Plain(params?: ApiPttSpiderPost$Plain$Params, context?: HttpContext): Observable<PttSearchRule> {
    return this.apiPttSpiderPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PttSearchRule>): PttSearchRule => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPost$Json$Response(params?: ApiPttSpiderPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PttSearchRule>> {
    return apiPttSpiderPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderPost$Json(params?: ApiPttSpiderPost$Json$Params, context?: HttpContext): Observable<PttSearchRule> {
    return this.apiPttSpiderPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PttSearchRule>): PttSearchRule => r.body)
    );
  }

  /** Path part for operation `apiPttSpiderDelete()` */
  static readonly ApiPttSpiderDeletePath = '/api/PttSpider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderDelete$Plain$Response(params?: ApiPttSpiderDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiPttSpiderDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderDelete$Plain(params?: ApiPttSpiderDelete$Plain$Params, context?: HttpContext): Observable<boolean> {
    return this.apiPttSpiderDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttSpiderDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderDelete$Json$Response(params?: ApiPttSpiderDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiPttSpiderDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPttSpiderDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPttSpiderDelete$Json(params?: ApiPttSpiderDelete$Json$Params, context?: HttpContext): Observable<boolean> {
    return this.apiPttSpiderDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

}
