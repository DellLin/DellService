/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AccountViewModel } from '../models/account-view-model';
import { apiAccountAllGet$Json } from '../fn/account/api-account-all-get-json';
import { ApiAccountAllGet$Json$Params } from '../fn/account/api-account-all-get-json';
import { apiAccountAllGet$Plain } from '../fn/account/api-account-all-get-plain';
import { ApiAccountAllGet$Plain$Params } from '../fn/account/api-account-all-get-plain';
import { apiAccountGet$Json } from '../fn/account/api-account-get-json';
import { ApiAccountGet$Json$Params } from '../fn/account/api-account-get-json';
import { apiAccountGet$Plain } from '../fn/account/api-account-get-plain';
import { ApiAccountGet$Plain$Params } from '../fn/account/api-account-get-plain';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAccountGet()` */
  static readonly ApiAccountGetPath = '/api/Account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Plain$Response(params?: ApiAccountGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountViewModel>> {
    return apiAccountGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Plain(params?: ApiAccountGet$Plain$Params, context?: HttpContext): Observable<AccountViewModel> {
    return this.apiAccountGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountViewModel>): AccountViewModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Json$Response(params?: ApiAccountGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountViewModel>> {
    return apiAccountGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountGet$Json(params?: ApiAccountGet$Json$Params, context?: HttpContext): Observable<AccountViewModel> {
    return this.apiAccountGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountViewModel>): AccountViewModel => r.body)
    );
  }

  /** Path part for operation `apiAccountAllGet()` */
  static readonly ApiAccountAllGetPath = '/api/Account/All';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountAllGet$Plain$Response(params?: ApiAccountAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AccountViewModel>>> {
    return apiAccountAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountAllGet$Plain(params?: ApiAccountAllGet$Plain$Params, context?: HttpContext): Observable<Array<AccountViewModel>> {
    return this.apiAccountAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AccountViewModel>>): Array<AccountViewModel> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountAllGet$Json$Response(params?: ApiAccountAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AccountViewModel>>> {
    return apiAccountAllGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountAllGet$Json(params?: ApiAccountAllGet$Json$Params, context?: HttpContext): Observable<Array<AccountViewModel>> {
    return this.apiAccountAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AccountViewModel>>): Array<AccountViewModel> => r.body)
    );
  }

}
