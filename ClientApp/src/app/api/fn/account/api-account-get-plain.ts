/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountViewModel } from '../../models/account-view-model';

export interface ApiAccountGet$Plain$Params {
}

export function apiAccountGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAccountGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountViewModel>> {
  const rb = new RequestBuilder(rootUrl, apiAccountGet$Plain.PATH, 'get');
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

apiAccountGet$Plain.PATH = '/api/Account';
