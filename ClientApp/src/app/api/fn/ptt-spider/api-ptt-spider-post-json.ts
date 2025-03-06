/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PttSearchRule } from '../../models/ptt-search-rule';

export interface ApiPttSpiderPost$Json$Params {
      body?: PttSearchRule
}

export function apiPttSpiderPost$Json(http: HttpClient, rootUrl: string, params?: ApiPttSpiderPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PttSearchRule>> {
  const rb = new RequestBuilder(rootUrl, apiPttSpiderPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PttSearchRule>;
    })
  );
}

apiPttSpiderPost$Json.PATH = '/api/PttSpider';
