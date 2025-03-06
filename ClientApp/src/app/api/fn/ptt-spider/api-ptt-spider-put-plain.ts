/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PttSearchRule } from '../../models/ptt-search-rule';

export interface ApiPttSpiderPut$Plain$Params {
      body?: PttSearchRule
}

export function apiPttSpiderPut$Plain(http: HttpClient, rootUrl: string, params?: ApiPttSpiderPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PttSearchRule>> {
  const rb = new RequestBuilder(rootUrl, apiPttSpiderPut$Plain.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PttSearchRule>;
    })
  );
}

apiPttSpiderPut$Plain.PATH = '/api/PttSpider';
