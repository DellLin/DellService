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

import { PttCatchHistory } from '../models/ptt-catch-history';

@Injectable({
  providedIn: 'root',
})
export class PttCatchHistoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPttCatchHistoryGet
   */
  static readonly ApiPttCatchHistoryGetPath = '/api/PttCatchHistory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttCatchHistoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttCatchHistoryGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<PttCatchHistory>>> {

    const rb = new RequestBuilder(this.rootUrl, PttCatchHistoryService.ApiPttCatchHistoryGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PttCatchHistory>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPttCatchHistoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttCatchHistoryGet$Plain(params?: {
  }): Observable<Array<PttCatchHistory>> {

    return this.apiPttCatchHistoryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PttCatchHistory>>) => r.body as Array<PttCatchHistory>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttCatchHistoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttCatchHistoryGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<PttCatchHistory>>> {

    const rb = new RequestBuilder(this.rootUrl, PttCatchHistoryService.ApiPttCatchHistoryGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PttCatchHistory>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPttCatchHistoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttCatchHistoryGet$Json(params?: {
  }): Observable<Array<PttCatchHistory>> {

    return this.apiPttCatchHistoryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PttCatchHistory>>) => r.body as Array<PttCatchHistory>)
    );
  }

}
