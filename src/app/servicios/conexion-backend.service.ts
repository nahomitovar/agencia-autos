import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConexionBackendService {
  constructor(private http: HttpClient) { }
 
  url:string = 'http://localhost:9001/';

  PostMethod(params:any = {}, actionURL:string){
    return this.http.post(this.url + actionURL, params)
      .pipe(map((Response: any) => {
        return Response
      }));
  }

  GetMethod(actionURL:string){
    return this.http.get(this.url + actionURL)
      .pipe(map((Response:any) => {
        return Response;
      }));
  }
}
