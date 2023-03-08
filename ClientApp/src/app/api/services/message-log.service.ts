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

import { MessageLog } from '../models/message-log';

@Injectable({
  providedIn: 'root',
})
export class MessageLogService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMessageLogGet
   */
  static readonly ApiMessageLogGetPath = '/api/MessageLog';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMessageLogGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessageLogGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<MessageLog>>> {

    const rb = new RequestBuilder(this.rootUrl, MessageLogService.ApiMessageLogGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MessageLog>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMessageLogGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessageLogGet$Plain(params?: {
  }): Observable<Array<MessageLog>> {

    return this.apiMessageLogGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MessageLog>>) => r.body as Array<MessageLog>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMessageLogGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessageLogGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<MessageLog>>> {

    const rb = new RequestBuilder(this.rootUrl, MessageLogService.ApiMessageLogGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MessageLog>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMessageLogGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessageLogGet$Json(params?: {
  }): Observable<Array<MessageLog>> {

    return this.apiMessageLogGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MessageLog>>) => r.body as Array<MessageLog>)
    );
  }

}
