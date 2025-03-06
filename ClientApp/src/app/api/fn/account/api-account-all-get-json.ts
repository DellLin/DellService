/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountViewModel } from '../../models/account-view-model';

export interface ApiAccountAllGet$Json$Params {
}

export function apiAccountAllGet$Json(http: HttpClient, rootUrl: string, params?: ApiAccountAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AccountViewModel>>> {
  const rb = new RequestBuilder(rootUrl, apiAccountAllGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AccountViewModel>>;
    })
  );
}

apiAccountAllGet$Json.PATH = '/api/Account/All';
