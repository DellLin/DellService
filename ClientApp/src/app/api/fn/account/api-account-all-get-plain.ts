/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountViewModel } from '../../models/account-view-model';

export interface ApiAccountAllGet$Plain$Params {
}

export function apiAccountAllGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAccountAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AccountViewModel>>> {
  const rb = new RequestBuilder(rootUrl, apiAccountAllGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AccountViewModel>>;
    })
  );
}

apiAccountAllGet$Plain.PATH = '/api/Account/All';
