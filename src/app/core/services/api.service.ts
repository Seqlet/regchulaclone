import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

export interface ApiInterface {
  get<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T>;
  post<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T>;
  put<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T>;
  delete<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T>;
}

@Injectable({
  providedIn: "root"
})
export class ApiService implements ApiInterface {
  static BASE_URL = "";
  static API_BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    return this.http.get<T>(ApiService.API_BASE_URL + url, {
      params
    });
  }
  post<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    return this.http.post<T>(ApiService.API_BASE_URL + url, params);
  }

  put<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    return this.http
      .get<T>(ApiService.API_BASE_URL + url, params)
      .pipe(map((res: any) => res.body));
  }

  delete<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    return this.http.get<T>(url, params).pipe(map((res: any) => res.body));
  }
}
