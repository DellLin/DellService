/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PttSearchRule } from '../../models/ptt-search-rule';

export interface ApiPttSpiderGet$Json$Params {
}

export function apiPttSpiderGet$Json(http: HttpClient, rootUrl: string, params?: ApiPttSpiderGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PttSearchRule>>> {
  const rb = new RequestBuilder(rootUrl, apiPttSpiderGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PttSearchRule>>;
    })
  );
}

apiPttSpiderGet$Json.PATH = '/api/PttSpider';
