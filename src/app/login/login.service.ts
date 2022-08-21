import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 Api_Url = environment.API_URL
  constructor(private http: HttpClient) { }


  getUserLogin(){
   return  this.http.post(this.Api_Url + '/login','')
  }

}
