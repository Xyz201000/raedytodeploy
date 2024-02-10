import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class RegsiterSerService {
  baseUrl="http://vishisht-login.itcblogs.xyz/auth/register"

  constructor(private httpcl:HttpClient)  { }
  registerUser(reg:register):Observable<Object>{
    console.log(reg)
    return this.httpcl.post(`${this.baseUrl}`,reg);
  }
  
}
