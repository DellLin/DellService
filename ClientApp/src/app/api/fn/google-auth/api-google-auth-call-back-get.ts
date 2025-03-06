/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiGoogleAuthCallBackGet$Params {
  code?: string;
  error?: string;
}

export function apiGoogleAuthCallBackGet(http: HttpClient, rootUrl: string, params?: ApiGoogleAuthCallBackGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiGoogleAuthCallBackGet.PATH, 'get');
  if (params) {
    rb.query('code', params.code, {});
    rb.query('error', params.error, {});
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

apiGoogleAuthCallBackGet.PATH = '/api/GoogleAuth/CallBack';
