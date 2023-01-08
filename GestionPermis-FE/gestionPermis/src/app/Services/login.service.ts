import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Login } from '../Models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private host = 'http://127.0.0.1:8009/token';
public authenticatedUser:Login |undefined
  constructor(private http:HttpClient, private router: Router) { }

public authenticate(login:Login):Observable<boolean>{
  this.http.post(this.host,login).subscribe({
    next:result=>{
      localStorage.clear()
      this.authenticatedUser=login
      const Token1 = JSON.stringify(result)
      const Token2 = JSON.parse(Token1)
      localStorage.setItem("jwt", Token2["accessToken"])
      this.router.navigate(['allConducteur'])
      
      return of(true)
    },
    error:error=>{
      localStorage.removeItem('jwt')
      console.log(error)
    }
    })
    return of(false)
} 

/* public GetToken(login:Login){
  console.log(login)
  this.http.post(this.host,login).subscribe({
    next:result=>{
      console.log(result)
        },
        error:error=>{
          console.log(error)
        }
      })
} */

deleteToken(){
  localStorage.removeItem('jwt')
  this.router.navigate(['login'])
}
getToken(): string|null{
  return localStorage.getItem('jwt')
}
getAuthenticatedUser():any{
  return this.authenticatedUser
}

}

