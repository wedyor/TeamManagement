import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from "./auth-data.model";
import { RegData } from "./reg-data.model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root"})
export class AuthService {
  private isAuthenticated = false;
  user : any;
  public userEmail : any;
  public userId : any;
  public identifiant: any;
  public profession:any;
  public status: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router){}


  getIsAuth(){
    return this.isAuthenticated;
  }


  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }



    async login(email: string ,password: string ) {
      this.userEmail = email;
      const authData: AuthData = {email: email, password : password};
      console.log(authData);
   this.user = await this.http.get("http://localhost:3000/users?email="+email).toPromise();
   console.log(this.user[0]);
   if(this.user && this.user[0].password == password){
   localStorage.setItem("userId", this.user[0].userId);
   localStorage.setItem("role", this.user[0].role);
   localStorage.setItem("email", this.user[0].email);
   localStorage.setItem("isAuth", 'true');
   this.isAuthenticated = true;
   this.router.navigate(['/requests']);
   }
   else{ console.log('verifier pass')}
    }

  getUserId() {
    return  this.identifiant;
  }
  getUserType(){
    let profession = this.userId.profession;
    let status = this.userId.status;
    console.log(profession);
    return profession;
  }



    logout(){
      localStorage.removeItem("userId");
      localStorage.removeItem("role");
      localStorage.removeItem("email");
      localStorage.setItem("isAuth", 'false');
      window.location.reload();
    }



}
