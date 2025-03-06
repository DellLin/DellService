/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiPttCatchHistoryGet$Json } from '../fn/ptt-catch-history/api-ptt-catch-history-get-json';
import { ApiPttCatchHistoryGet$Json$Params } from '../fn/ptt-catch-history/api-ptt-catch-history-get-json';
import { apiPttCatchHistoryGet$Plain } from '../fn/ptt-catch-history/api-ptt-catch-history-get-plain';
import { ApiPttCatchHistoryGet$Plain$Params } from '../fn/ptt-catch-history/api-ptt-catch-history-get-plain';
import { PttCatchHistory } from '../models/ptt-catch-history';

@Injectable({ providedIn: 'root' })
export class PttCatchHistoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPttCatchHistoryGet()` */
  static readonly ApiPttCatchHistoryGetPath = '/api/PttCatchHistory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttCatchHistoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttCatchHistoryGet$Plain$Response(params?: ApiPttCatchHistoryGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PttCatchHistory>>> {
    return apiPttCatchHistoryGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPttCatchHistoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttCatchHistoryGet$Plain(params?: ApiPttCatchHistoryGet$Plain$Params, context?: HttpContext): Observable<Array<PttCatchHistory>> {
    return this.apiPttCatchHistoryGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PttCatchHistory>>): Array<PttCatchHistory> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPttCatchHistoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttCatchHistoryGet$Json$Response(params?: ApiPttCatchHistoryGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PttCatchHistory>>> {
    return apiPttCatchHistoryGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPttCatchHistoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPttCatchHistoryGet$Json(params?: ApiPttCatchHistoryGet$Json$Params, context?: HttpContext): Observable<Array<PttCatchHistory>> {
    return this.apiPttCatchHistoryGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PttCatchHistory>>): Array<PttCatchHistory> => r.body)
    );
  }

}
