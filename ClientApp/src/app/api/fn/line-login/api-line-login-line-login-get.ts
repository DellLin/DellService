/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiLineLoginLineLoginGet$Params {
  linkToken?: string;
}

export function apiLineLoginLineLoginGet(http: HttpClient, rootUrl: string, params?: ApiLineLoginLineLoginGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiLineLoginLineLoginGet.PATH, 'get');
  if (params) {
    rb.query('linkToken', params.linkToken, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiLineLoginLineLoginGet.PATH = '/api/LineLogin/LineLogin';
