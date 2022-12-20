import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private LoggedIn: boolean = false;

  constructor(private httpClient: HttpClient) { }

  login(credentials: {email?: string | null | undefined, password?: string | null | undefined}): Observable<any>{
    const headers= new HttpHeaders().set("apikey", environment.api.key)
    return this.httpClient.post(
      environment.api.urlAuth+'token?grant_type=password',
      credentials, {"headers": headers}
    );
  }

  isLoggedIn(): Observable<boolean>{
    const headers= new HttpHeaders().set("apikey", environment.api.key).set("Authorization", "Bearer "+localStorage.getItem("token"))
    return this.httpClient.get(
      environment.api.urlAuth+'user', {"headers": headers}
    ).pipe(
      map(
        (dataUser: any) => {
          return true;
        }
      ),
      catchError(
        (error: any) => {
          return of(false);
        }
      )
    );
    /* 
    .pipe(
          map(
            (dataUser) => {
              console.log("Data user found", dataUser);
              this.userService.setLogin();
              return true;
            }
          ), catchError(
            (error) => {
              console.log("Authentification échouée", error);
              this.router.navigate(['login/']);
              return of(false);
            }
          )
        )
    */
  }

  setLogin(){
    this.LoggedIn=true;
  }
  getLogin(){
    return this.LoggedIn;
  }

  signup(credentials: {email: string, password: string}): Observable<any>{
    const headers= new HttpHeaders().set("apikey", environment.api.key)
    return this.httpClient.post(
      environment.api.urlAuth+'signup',
      credentials,  {"headers": headers}
    );
  }

  logout(){
    localStorage.removeItem("token");
  }
}
