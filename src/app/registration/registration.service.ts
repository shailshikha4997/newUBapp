import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
 Api_Url = environment.API_URL
  constructor(private http: HttpClient) { }

  getRegisterData(data:any){
    return this.http.post(this.Api_Url + '/registration',data)
  }
}
