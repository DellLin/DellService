/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiLineNotifyLineNotifyAuthGet$Json$Params {
}

export function apiLineNotifyLineNotifyAuthGet$Json(http: HttpClient, rootUrl: string, params?: ApiLineNotifyLineNotifyAuthGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, apiLineNotifyLineNotifyAuthGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

apiLineNotifyLineNotifyAuthGet$Json.PATH = '/api/LineNotify/LineNotifyAuth';
