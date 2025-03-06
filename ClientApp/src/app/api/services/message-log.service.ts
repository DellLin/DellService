/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiMessageLogGet$Json } from '../fn/message-log/api-message-log-get-json';
import { ApiMessageLogGet$Json$Params } from '../fn/message-log/api-message-log-get-json';
import { apiMessageLogGet$Plain } from '../fn/message-log/api-message-log-get-plain';
import { ApiMessageLogGet$Plain$Params } from '../fn/message-log/api-message-log-get-plain';
import { MessageLog } from '../models/message-log';

@Injectable({ providedIn: 'root' })
export class MessageLogService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiMessageLogGet()` */
  static readonly ApiMessageLogGetPath = '/api/MessageLog';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMessageLogGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessageLogGet$Plain$Response(params?: ApiMessageLogGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MessageLog>>> {
    return apiMessageLogGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMessageLogGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessageLogGet$Plain(params?: ApiMessageLogGet$Plain$Params, context?: HttpContext): Observable<Array<MessageLog>> {
    return this.apiMessageLogGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MessageLog>>): Array<MessageLog> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMessageLogGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessageLogGet$Json$Response(params?: ApiMessageLogGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MessageLog>>> {
    return apiMessageLogGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMessageLogGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessageLogGet$Json(params?: ApiMessageLogGet$Json$Params, context?: HttpContext): Observable<Array<MessageLog>> {
    return this.apiMessageLogGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MessageLog>>): Array<MessageLog> => r.body)
    );
  }

}
