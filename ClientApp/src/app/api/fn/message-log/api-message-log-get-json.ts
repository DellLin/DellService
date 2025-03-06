/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MessageLog } from '../../models/message-log';

export interface ApiMessageLogGet$Json$Params {
}

export function apiMessageLogGet$Json(http: HttpClient, rootUrl: string, params?: ApiMessageLogGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MessageLog>>> {
  const rb = new RequestBuilder(rootUrl, apiMessageLogGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MessageLog>>;
    })
  );
}

apiMessageLogGet$Json.PATH = '/api/MessageLog';
