/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountViewModel } from '../../models/account-view-model';

export interface ApiLineLoginSyncLineProfileGet$Plain$Params {
}

export function apiLineLoginSyncLineProfileGet$Plain(http: HttpClient, rootUrl: string, params?: ApiLineLoginSyncLineProfileGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountViewModel>> {
  const rb = new RequestBuilder(rootUrl, apiLineLoginSyncLineProfileGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AccountViewModel>;
    })
  );
}

apiLineLoginSyncLineProfileGet$Plain.PATH = '/api/LineLogin/SyncLineProfile';
